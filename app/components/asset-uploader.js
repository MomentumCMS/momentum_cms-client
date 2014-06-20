/*global plupload*/
export default Ember.Component.extend({

  plupload: false,
  tag: 'asset',

  //-- Plupload Initialization ----------------------------------------------

  didInsertElement: function() {
    debugger;
    var uploader = new plupload.Uploader({
      runtimes: 'html5,flash,html4',
      container: this.$('.asset-uploader')[0],
      browse_button: this.$('.plupload-browse')[0],
      url: this.get('uploadUrl'),
      headers: {
        'Accept': 'application/javascript'
      },
      multipart: true,
      multipart_params: {
        tag: this.get('tag')
      },
      file_data_name: 'asset',
      drop_element: this.$('.plupload-dropelement')[0],
      multi_selection: false,
      init: {
        FilesAdded:     $.proxy(this.filesAdded, this),
        BeforeUpload:   $.proxy(this.beforeUpload, this),
        UploadProgress: $.proxy(this.uploadProgress, this),
        FileUploaded:   $.proxy(this.fileUploaded, this)
      }
    });
    uploader.init();
    this.set('plupload', uploader);
  },

  //-- Plupload Callbacks ---------------------------------------------------

  filesAdded: function(uploader) {
    this.get('plupload').refresh();
    this.get('plupload').start();
  },

  beforeUpload: function(uploader) {
    debugger;
  },

  uploadProgress: function(uploader) {
    debugger;
  },

  fileUploaded: function(uploader) {
    debugger;
  }

});