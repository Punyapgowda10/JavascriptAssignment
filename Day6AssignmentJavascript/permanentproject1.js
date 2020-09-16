window.onload = function () {
    let initialsuperheroes = [
    {
        name:"Thomas",
        number:26,
        sourceanddestination:"bengaluru-mysore",
        passengercapacity:"465",
    },
    {
        name:"dulquer",
        number:27,
        sourceanddestination:"mangaluru-mandya",
        passengercapacity:"244",
    },
    {
        name:"prithvi",
        number:27,
        sourceanddestination:"karwar-mumbai",
        passengercapacity:"465",
    },   
];

if (localStorage.getItem("superheroes") == null) {
    localStorage.setItem("superheroes",JSON.stringify(initialsuperheroes));
}
};
function display(superarray = undefined) {
     let tabledata = "";
     let superheroes;
     if(superarray == undefined){
         superheroes =JSON.parse(localStorage.getItem("superheroes"));
     } else {
         superheroes =superarray;
     }

    superheroes.forEach(function (superhero,index) {

        let currentrow =`<tr>
        <td>${index + 1}</td>
        <td>${superhero.name}</td>
        <td>${superhero.number}</td>
        <td>${superhero.sourceanddestination}</td>
        <td>${superhero.passengercapacity}</td>
        <td>
        <button onclick='deletebus(${index})'>deleteBus</button>
        <button onclick='showModal(${index})'>update</button>
        </td>
        </tr>`;

        tabledata += currentrow;
    });

    document.getElementsByClassName("tdata")[0].innerHTML = tabledata;
    
  
  }
    display();

    function addsuperhero(e) {
        e.preventDefault();
        let superhero = {};
        let name = document.getElementById("name").value;
        let number = document.getElementById("number").value;
        let sourceanddestination = document.getElementById("sourceanddestination").value;
        let passengercapacity = document.getElementById("passengercapacity").value;
        superhero.name = name;
        superhero.number = Number(number);
        superhero.sourceanddestination = sourceanddestination;
        superhero.passengercapacity = passengercapacity;
        // console.log(superhero);

    //   console.log(name, age, city, salary);

    // superheroes.push(superhero);
    // console.log(superheroes);
    let superheroes =JSON.parse(localStorage.getItem("superheroes"));
    superheroes.push(superhero);
    localStorage.setItem("superheroes",JSON.stringify(superheroes));

       

        display();
        
        document.getElementById("name").value ="";
        document.getElementById("number").value ="";
        document.getElementById("sourceanddestination").value ="";
        document.getElementById("passengercapacity").value ="";
    }

    function searchByName() {
        let searchValue  = document.getElementById("searchName").value;

        let newdata = superheroes.filter(function(superhero){
            return (
                superhero.name.toUpperCase().indexOf(searchValue.toUpperCase()) != -1
            );
        });

        display(newdata);
    }

    function deletebus(index) {
        let superheroes =JSON.parse(localStorage.getItem("superheroes"));
        superheroes.splice(index, 1);
        localStorage.setItem("superheroes",JSON.stringify(superheroes));
        display();
        //  superhero.push(superhero);
    }

    let updateIndex;

    function copysuperhero(index) {
        let superheroes =JSON.parse(localStorage.getItem("superheroes"));
        updateIndex = index;
        let superhero = superheroes[index];
        //  console.log(updateIndex);

        document.getElementById("upname").value = superhero.name;
        document.getElementById("upnumber").value = superhero.number;
        document.getElementById("upsourceanddestination").value = superhero.sourceanddestination;
        document.getElementById("uppassengercapacity").value = superhero.passengercapacity;
    }

    function updatesuperhero(e)
    {

        e.preventDefault();
        let superheroes =JSON.parse(localStorage.getItem("superheroes"));
        let superhero = superheroes[updateIndex];
        console.log(superhero);
        let name = document.getElementById("upname").value;
        let age = document.getElementById("upnumber").value;
        let city = document.getElementById("upsourceanddestination").value;
        let salary = document.getElementById("uppassengercapacity").value;
        superhero.name = name;
        superhero.number = Number(number);
        superhero.sourceanddestination = sourceanddestination ;
        superhero.passengercapacity = passengercapacity;
        


        localStorage.setItem("superheroes", JSON.stringify(superheroes));
        display(superheroes);

    

        let modal = document.getElementsByClassName("modal")[0];
        modal.style.display = "none";

     }
    
        // .modal {
        //     width: 100%;
        //     height: 100vh;
        //     background-color: rgba(243, 231, 231, 0.5);
        //     position: fixed;
        //     display: none; 
        //   }
    
        //   .modalchild {
        //     width: 70%;
        //     height: 500px;
        //     background-color:rgb(153, 145, 145);
        //     margin-left: 15%;
        //     margin-top: 100px;
        //      display: inline-block; 
          

    function showModal(index){
        let modal = document.getElementsByClassName("modal")[0];
        modal.style.display = "block";

        copysuperhero(index);
    }

    function hideModal(event){
        if(event.target.className == "modal") {
            let modal = document.getElementsByClassName("modal")[0];
            modal.style.display = "none";
        }
    }