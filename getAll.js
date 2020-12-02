fetch('https://bonsai-hiring.azurewebsites.net/api/user', {
    method: 'GET',
    headers: {
        'Accept':'application/json',
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin':'*',
        'bonsai-key': 'ef00736003cb40f5800aaa14ebf16a62'
    }
}).then(res=> {
    if(!res.ok){
      throw new Error("Response not OK"); 
    }
    return res.json();
  })
  .then((data)=>{    
    var table = $('#table_id').DataTable({
      data: data.data,
      columns: [        
        { data: 'id' },
        { data: 'name' },
        { data: 'surname' },
        { data: 'dateOfBirth' },
        { data: 'aktivan' }
    ]});
    $('#table_id').on( 'click', 'tbody tr', function () {
      var row = table.row($(this));
      var id = row.data().id;
      $('#btnEdit').val(id);
      $('#btnDelete').val(id);
      $('#name').val(row.data().name)
      $('#surname').val(row.data().surname)
      $('#dateOfBirth').val(row.data().dateOfBirth)
      $('#aktivan')[0].checked = row.data().aktivan
    } );
    console.log(data)})