function AGBFunction() {
  // Declare variables 
  var input, filter, table, tr, td, i;
  input = document.getElementById("AGBInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("AGBTable");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td");
    if (td) {
        tr[i].style.display = "";
      }
    } 
  }
}