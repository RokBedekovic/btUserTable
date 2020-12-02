(function($){
    
    $.fn.getFormData = function(){
        let data = {};
        let dataArray = $(this).serializeArray();
        for(let i=0; i < dataArray.length; i++){
            data[dataArray[i].name] = dataArray[i].value;
        }
        console.log($('#aktivan'))
        data['aktivan'] = $('#aktivan')[0].checked
        return data;
    }

}) (jQuery);