$('#btnDelete').on('click', function(e){
    e.preventDefault();

    let _this = $(this);             
    let route = 'https://bonsai-hiring.azurewebsites.net/api/user/'+_this.val()
    console.log(route)

    fetch(route, {
    method: 'DELETE',
    headers: {
        'Accept':'application/json',
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin':'*',
        'bonsai-key': 'ef00736003cb40f5800aaa14ebf16a62'
    }
})
    .then(res => {
        if (res.ok) {
            console.log('SUCCESS')
            _this.val("0")
            location.reload();
        } else {
            console.log('Not Successful')
        }
    })
    .catch(error => console.log('ERROR'))

})