const $button=$('#button');
const $tbody=$('table .tbody');

const istifadeciler = [
    {ad: 'Səbinə', soyad:'Qəniyeva', cinsiyyet:'qadın', email:'ganievasabina202@gmail.com' }
]

//console.log(istifadeciler);

function melumatlar(user={},index) {
    const {ad,soyad,cinsiyyet,email}=user;
    $tbody.append(`
    <tr>
    <td>${ad}</td>
    <td>${soyad}</td>
    <td>${cinsiyyet}</td>
    <td>${email}</td>
    <td><button class="buttondeyis">Dəyis</button>
    <button class="buttonsil" data-id="${index}">Sil</button>  </td>
    </tr>
    `);
}

function deyeral() {
    const $ad=$('#ad').val();
    const $soyad=$('#soyad').val();
    const $cinsiyyet=$('#cinsiyyet').val();
    const $email=$('#email').val();
 
    let yeniuser = {
    ad: $ad, 
    soyad: $soyad, 
    cinsiyyet: $cinsiyyet, 
    email: $email }

    istifadeciler.push(yeniuser);
    tableyaz();
}


function tableyaz(){
    $('table .tbody tr').remove();
    istifadeciler.forEach((user,index) => melumatlar(user, index) );
}
const button = document.querySelectorAll(".button")

button.forEach(btn=>{
    btn.addEventListener('click', e=>{console.log('click');});
})
tableyaz();
$button.on('click',deyeral);


 $('table').on('click', '.buttonsil', function(){
    $(this).closest('tr').remove()
  });



  $(document).on("click", ".buttondeyis", function(){		
    $(this).parents("tr").find("td:not(:last-child)").each(function(){
        $(this).html('<input type="text" class="form-wrapper" value="' + $(this).text() + '">');
    });		
    $(this).parents("tr").find(".add, .edit").toggle();
    $(".buttondeyis").attr("disabled", "disabled");
  
});