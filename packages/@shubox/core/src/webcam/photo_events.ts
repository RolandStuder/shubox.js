import {Webcam} from "../webcam";

export class PhotoEvents {
  public webcam: Webcam;

  constructor(webcam: Webcam) {
    this.webcam = webcam;
    this.webcam.element.addEventListener("click", this.startCamera);
    this.wireUpSelectorsAndEvents();
  }

  public startCamera = (event?: Event) => {
    event?.preventDefault();
    if (this.webcam.dom.alreadyStarted()) { return; }

    this.webcam.dom.init();
    this.webcam.element.removeEventListener("click", this.startCamera);
    this.webcam.dom.video.addEventListener("click", this.takePhoto);

    navigator
      .mediaDevices
      .getUserMedia({
        audio: false,
        video: {
          height: this.webcam.element.offsetHeight,
          width: this.webcam.element.offsetWidth,
        },
      })
      .then((stream) => { this.webcam.dom.video.srcObject = stream; })
      .catch(() => {});

    this.webcam.dom.toggleStarted();
    this.webcam.webcamOptions.cameraStarted?.call(this, this.webcam);
  }

  public takePhoto = (event?: Event) => {
    event?.preventDefault();
    if (!this.webcam.dom.alreadyStarted()) { return; }

    let file: any;
    this.webcam.dom.canvas?.getContext("2d")!.drawImage(this.webcam.dom.video, 0, 0);
    this.webcam.dom.canvas?.toBlob((blob: Blob) => {
      const dateTime = (new Date()).toISOString();
      file = blob || new Blob();
      file.name = `webcam-${dateTime}.png`;
      this.webcam.dropzone.addFile(file);
    });

    this.webcam.dom.finalize(null);
    this.webcam.webcamOptions.photoTaken?.call(this, this.webcam, file as Blob);
  }

  public stopCamera = (event?: Event) => {
    event?.preventDefault();

    const src = (this.webcam.dom.video.srcObject as MediaStream);
    src?.getTracks().forEach((track) => { track.stop(); });

    this.webcam.element.addEventListener("click", this.startCamera);
    this.webcam.dom.toggleStopped();
    this.webcam.webcamOptions.cameraStopped?.call(this, this.webcam);
  }

  private wireUpSelectorsAndEvents() {
    this.wireUp("startCamera");
    this.wireUp("stopCamera");
    this.wireUp("takePhoto");

    if (this.webcam.webcamOptions?.startCapture) {
      console.warn(
        "`startCapture` is being deprecated in favor of `takePhoto`. Use `takePhoto` instead.",
      );
      this.wireUp("takePhoto", this.webcam.webcamOptions.startCapture);
    }
  }

  private wireUp(eventName: string, selector?: string) {
    try {
      const el = document.querySelector(selector || this.webcam.webcamOptions[eventName]);
      el?.addEventListener("click", (this[eventName]));
    } catch (error) {
      if (!(error instanceof DOMException)) { throw error; }
    }
  }
}