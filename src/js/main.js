
let menuClassList = document.querySelector('#menu').classList;
let iconClassList = document.querySelector('#icon').classList;
let images = document.querySelectorAll('#testimonial figure img');
let review = document.querySelector('.review')
let rev = document.querySelector('.review .rev')
let revName = document.querySelector('.review .name')
let revJob = document.querySelector('.review .job')

const reviews = [
    {
      name: "Sarah Johnson",
      job: "Software Engineer",
      review: "\"The user interface is seamless and intuitive. It has significantly improved my daily workflow and efficiency\"!"
    },
    {
      name: "Emily Davis",
      job: "Product Manager",
      review: "\"A great tool for managing projects. The features are exactly what we needed for better team collaboration\"!"
    },
    {
      name: "Michael Brown",
      job: "UX Designer",
      review: "\"The design is clean, and the user experience is smooth. It helps me create better experiences for my clients\"!"
    },
    {
      name: "Olivia Martinez",
      job: "Data Analyst",
      review: "\"The data visualization capabilities are top-notch. It made analyzing complex data much easier and quicker\"!"
    },
    {
      name: "James Wilson",
      job: "Marketing Specialist",
      review: "\"This platform has transformed our marketing strategies. It's simple to use and offers great customer support\"!"
    }
  ];
  
rev.innerHTML = reviews[0]['review']
revName.innerHTML = reviews[0]['name']
revJob.innerHTML = reviews[0]['job']
function toggleMenu() {

    if(menuClassList.contains('hidden') && iconClassList.contains('fa-bars')){
        menuClassList.remove('hidden');
        menuClassList.add('block');
        iconClassList.remove('fa-bars');
        iconClassList.add('fa-x');
    } else {
        menuClassList.remove('block');
        menuClassList.add('hidden');
        iconClassList.remove('fa-x');
        iconClassList.add('fa-bars');
    }
}
images.forEach(img=>{
    img.addEventListener('click', ()=>{
        review.classList.remove('active');
        rev.innerHTML = "";
        revName.innerHTML = "";
        revJob.innerHTML = "";
        images.forEach(i=>i.classList.remove('active'));
        img.classList.add('active');
        
        
        const index = Array.prototype.indexOf.call(images, img);
        setTimeout(()=>{
            review.classList.add('active');
            rev.innerHTML = reviews[index]['review'];
            revName.innerHTML = reviews[index]['name'];
            revJob.innerHTML = reviews[index]['job'];
        },0)
    })
})

function toggleSubscription(){
  document.querySelectorAll('#pricing .cards .card').forEach(card => {
    card.classList.toggle('checked');
  });
}