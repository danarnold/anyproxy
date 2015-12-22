module.exports = {

  summary:function(){
    return "use custom header authentication";
  },

  shouldUseLocalResponse : function(req,reqBody){
    var keyCode = req.headers['key-code'];
    if (keyCode === 'REPLACE-ME') {
      return false;
    } else {
      req.replaceLocalFile = true;
      return true;
    }
  },

  dealLocalResponse : function(req,reqBody,callback){
    if(req.replaceLocalFile){
      callback(418, {}, '');
    }
  },

  replaceRequestOption : function(req,option){
    var newOption = option;
    delete newOption.headers['key-code'];
    return newOption;
  }
};

