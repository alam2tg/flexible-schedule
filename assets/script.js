var today = dayjs().format("ddd, MMM D, YYYY");
$("#currentDay").text(today);

var now = dayjs().format("H");
console.log(now);

function blockColor() {
	$(".time-block").each(function () {
		var hour = parseInt(this.id);
		$(this).toggleClass("past", hour < now);
		$(this).toggleClass("present", hour === now);
		$(this).toggleClass("future", hour > now);
	});
}
blockColor();

function saveOnClick() {
	$(".saveBtn").on("click", function () {
		var key = $(this).parent().attr("id");
		var inputValue = $(this).siblings(".description").val();
		localStorage.setItem(key, inputValue);
	});
}
saveOnClick();

$(".time-block").each(function () {
	var key = $(this).attr("id");
	var value = localStorage.getItem(key);
	$(this).children(".description").val(value);
});
