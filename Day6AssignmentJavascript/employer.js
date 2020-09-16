let superheroes = [
    {
        name:"Thomas",
        age:26,
        city:"bengaluru",
        salary:"26,465",
    },
    {
        name:"dulquer",
        age:24,
        city:"chennai",
        salary:"28,465",
    },
    {
        name:"prithvi",
        age:25,
        city:"bengaluru",
        salary:"22,465",
    },   
];

function display(superarray) {
     let tabledata = "";

    superarray.forEach(function (superhero,index) {

        let currentrow =`<tr>
        <td>${index + 1}</td>
        <td>${superhero.name}</td>
        <td>${superhero.age}</td>
        <td>${superhero.city}</td>
        <td>${superhero.salary}</td>
        <td>
        <button onclick='deletesuperhero(${index})'>delete</button>
        // <button onclick='showModal(${index})'>update</button>
        </td>
        </tr>`;

        tabledata += currentrow;
    });

    document.getElementsByClassName("tdata")[0].innerHTML = tabledata;
    
    }

    display(superheroes);
    function searchByName() {
        let searchValue  = document.getElementById("searchName").value;

        let newdata = superheroes.filter(function(superhero){
            return (
                superhero.name.toUpperCase().indexOf(searchValue.toUpperCase()) != -1
            );
        });

        display(newdata);
    }

    function deletesuperhero(index) {
        superheroes.splice(index, 1);
        display(superheroes);
        //  superhero.push(superhero);
    }