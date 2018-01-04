var guide_prev = "";

function showGuide(id)
{
	if (guide_prev != id) {
		$("#guide").fadeOut("fast", function () {
			$("#guide").html($("#" + id).html());
			$("#guide").css("height", "auto");
			$("#guide").fadeIn("slow", function () {
				$("#guide")[0].scrollIntoView();
			});
		});
		guide_prev = id;
	}
}