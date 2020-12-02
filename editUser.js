$('#btnEdit').on('click', function(e){
    e.preventDefault();

    let _this = $(this);            
    let data = $('#myForm').getFormData();
    let route = 'https://bonsai-hiring.azurewebsites.net/api/user/'+_this.val()
    console.log(route)

    fetch(route, {
    method: 'PATCH',
    headers: {
        'Accept':'application/json',
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin':'*',
        'bonsai-key': 'ef00736003cb40f5800aaa14ebf16a62'
    },
    body: JSON.stringify(data)
})
    .then(res => {
        if (res.ok) {
            console.log('SUCCESS')
            _this.val("1")
            location.reload();
        } else {
            console.log('Not Successful')
        }
    })
    .then(user => console.log(data))
    .catch(error => console.log('ERROR'))

})
