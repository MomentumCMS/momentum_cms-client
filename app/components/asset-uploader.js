/*jshint unused:false */
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
    this._setDimensions();
    var uploader = new plupload.Uploader({
      runtimes: 'html5,flash,html4',
      container: this.$('.asset-uploader')[0],
      browse_button: this.$('.plupload-browse')[0],
      url: this._generateUploadUrl(),
      headers: {
        'Accept': 'application/javascript'
      },
      multipart: true,
      multipart_params: this._pluploadParams(),
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

  //-- Plupload Callbacks ---------------------------------------------------

  filesAdded: function(uploader) {
    this.get('plupload').refresh();
    this.get('plupload').start();
  },

  beforeUpload: function(uploader) {
    this.$('.progress').css('opacity', 90);
  },

  uploadProgress: function(uploader, file) {
    this.$('.plupload-progress-bar').css('width', file.percent + '%');
  },

  fileUploaded: function(uploader, pluploadFile, response) {
    var file = $.parseJSON(response.response);
    this.sendAction('action', file);
    if(this._isImage(file)) {
      this._displayImage(file);
    }
    this.set('asset', file);
    this.$('.progress').css('opacity', 0);
  },

  //-- Private Methods ------------------------------------------------------

  _pluploadParams: function() {
    var params = {};
    params.tag = this.get('tag');
    if(this.get('uploadParams')) {
      params = $.extend(params, this.get('uploadParams'));
    }
    return params;
  },

  _generateUploadUrl: function() {
    var url = '';
    if(Ember.ENV.API_URL) {
      url = Ember.ENV.API_URL;
    }
    url = url + this.get('uploadUrl');
    return url;
  },

  _setDimensions: function() {
    if(this.get('width') && this.get('height')) {
      this.$('.plupload-dropelement').width(this.get('width'));
      this.$('.plupload-dropelement').height(this.get('height'));
    }
  },

  _isImage: function() {
    return true;
  },

  _assetUrl: function(file) {
    return file.file.host + file.file.thumb_url;
  },

  _displayImage: function(file) {
    var _this = this;
    var url = this._assetUrl(file);
    this.$('.plupload-image').css('background-image', 'url("' + url + '")');
    Ember.run.later(function() {
      _this.$('.plupload-image').css('opacity', 1);
    }, 10);
  },

  _triggerDelete: function() {
    this.sendAction('deleteAction', this.get('asset'));
  },

  //-- Actions --------------------------------------------------------------

  actions: {

    triggerDelete: function() {
      this._triggerDelete();
    }

  }

});