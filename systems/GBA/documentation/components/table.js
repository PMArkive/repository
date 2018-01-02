function AGBFunction() {
  var input, filter, table, tr, td, i;
  input = document.getElementById("AGBInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("AGBTable");
  tr = table.getElementsByTagName("tr");
  var data = "";
  
  rows.forEach(function(row) {
  
    Array.prototype.slice.call(row.getElementsByTagName("td")).forEach(function(r){
      data += r.textContent;  
    });
	
	if(data.toUpperCase().indexOf(filter) > - 1){
		row.classList.remove("hidden");
	} else {
		row.classList.add("hidden");
	}
  });
}