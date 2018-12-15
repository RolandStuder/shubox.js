var ShuboxOptions = /** @class */ (function () {
    function ShuboxOptions(shubox) {
        this.shubox = shubox;
    }
    ShuboxOptions.prototype.toHash = function () {
        return {
            addedfile: function (file) { },
            error: function (file, message) { },
            queuecomplete: function () { },
            sending: function (file, xhr, formData) { },
            success: function (file) { },
            textBehavior: 'replace',
            successTemplate: '{{s3url}}',
            uploadingTemplate: '',
            acceptedFiles: 'image/*',
            clickable: true,
            s3Key: null,
            previewTemplate: "<div class=\"dz-preview dz-file-preview\">\n          <div class=\"dz-details\">\n            <div class=\"dz-filename\"><span data-dz-name></span></div>\n            <div class=\"dz-size\" data-dz-size></div>\n            <img data-dz-thumbnail />\n          </div>\n          <div class=\"dz-progress\"><span class=\"dz-upload\" data-dz-uploadprogress></span></div>\n          <div class=\"dz-success-mark\"><span>\u2714</span></div>\n          <div class=\"dz-error-mark\"><span>\u2718</span></div>\n          <div class=\"dz-error-message\"><span data-dz-errormessage></span></div>\n        </div>",
            previewsContainer: ['INPUT', 'TEXTAREA'].indexOf(this.shubox.element.tagName) >= 0
                ? false
                : null,
            transformName: null,
            dictMaxFilesExceeded: 'Your file limit of {{maxFiles}} file(s) has been reached.',
            maxFiles: null,
            extraParams: {},
        };
    };
    return ShuboxOptions;
}());
export { ShuboxOptions };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2h1Ym94X29wdGlvbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9Ac2h1Ym94L2NvcmUvc3JjL3NodWJveF9vcHRpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0lBR0UsdUJBQVksTUFBYztRQUN4QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN2QixDQUFDO0lBRUQsOEJBQU0sR0FBTjtRQUNFLE9BQU87WUFDTCxTQUFTLEVBQUUsVUFBUyxJQUFJLElBQUcsQ0FBQztZQUM1QixLQUFLLEVBQUUsVUFBUyxJQUFJLEVBQUUsT0FBTyxJQUFHLENBQUM7WUFDakMsYUFBYSxFQUFFLGNBQVksQ0FBQztZQUM1QixPQUFPLEVBQUUsVUFBUyxJQUFJLEVBQUUsR0FBRyxFQUFFLFFBQVEsSUFBRyxDQUFDO1lBQ3pDLE9BQU8sRUFBRSxVQUFTLElBQUksSUFBRyxDQUFDO1lBQzFCLFlBQVksRUFBRSxTQUFTO1lBQ3ZCLGVBQWUsRUFBRSxXQUFXO1lBQzVCLGlCQUFpQixFQUFFLEVBQUU7WUFDckIsYUFBYSxFQUFFLFNBQVM7WUFDeEIsU0FBUyxFQUFFLElBQUk7WUFDZixLQUFLLEVBQUUsSUFBSTtZQUNYLGVBQWUsRUFBRSwybEJBVVI7WUFDVCxpQkFBaUIsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztnQkFDaEYsQ0FBQyxDQUFDLEtBQUs7Z0JBQ1AsQ0FBQyxDQUFDLElBQUk7WUFDUixhQUFhLEVBQUUsSUFBSTtZQUNuQixvQkFBb0IsRUFDbEIsMkRBQTJEO1lBQzdELFFBQVEsRUFBRSxJQUFJO1lBQ2QsV0FBVyxFQUFFLEVBQUU7U0FDaEIsQ0FBQTtJQUNILENBQUM7SUFDSCxvQkFBQztBQUFELENBQUMsQUF6Q0QsSUF5Q0MifQ==