/*global plupload*/
export default Ember.Component.extend({

  plupload: false,
  uploadUrl: '/',
  uploadDataName: 'asset',
  uploadParams: false,
  tag: 'asset',
  baseUrl: false,

  //-- Plupload Initialization ----------------------------------------------

  didInsertElement: function() {
    var uploader = new plupload.Uploader({
      runtimes: 'html5,flash,html4',
      container: this.$('.asset-uploader')[0],
      browse_button: this.$('.plupload-browse')[0],
      url: this.generateUploadUrl(),
      headers: {
        'Accept': 'application/javascript'
      },
      multipart: true,
      multipart_params: this.pluploadParams(),
      file_data_name: this.get('uploadDataName'),
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

  pluploadParams: function() {
    var params = {};
    params.tag = this.get('tag');
    if(this.get('uploadParams')) {
      params = $.extend(params, this.get('uploadParams'));
    }
    return params;
  },

  generateUploadUrl: function() {
    var url = '';
    if(Ember.ENV.API_URL) {
      url = Ember.ENV.API_URL;
    }
    url = url + this.get('uploadUrl');
    return url;
  },

  //-- Plupload Callbacks ---------------------------------------------------

  filesAdded: function(uploader) {
    this.get('plupload').refresh();
    this.get('plupload').start();
  },

  beforeUpload: function(uploader) {
    this.$('.plupload-progress').css('opacity', 90);
  },

  uploadProgress: function(uploader, file) {
    this.$('.plupload-progress').css('width', file.percent + '%');
  },

  fileUploaded: function(uploader) {
    this.$('.plupload-progress').css('opacity', 90);
  }

});