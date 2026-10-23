/* Sample reviews for a client preview of the layout.
   These are not real customers and they are not from Google.
   Replace this list with copied customer reviews before the site goes live.
   Each item: { name, rating, date, quote } */
(function () {
  var first = [
    "Anitha", "Ramesh", "Kavya", "Suresh", "Divya", "Manoj", "Lakshmi", "Arun",
    "Pooja", "Naveen", "Meena", "Harish", "Shilpa", "Vinod", "Asha", "Prakash",
    "Deepa", "Karthik", "Geetha", "Imran", "Bhavya", "Sanjay", "Rekha", "Farhan",
    "Nandini", "Joseph", "Swathi", "Abdul", "Chitra", "Rohit", "Padma", "Vikram",
    "Savitha", "Nitin", "Uma", "Faisal", "Latha", "Girish", "Radha", "Sameer"
  ];
  var initials = ["A", "B", "D", "H", "K", "L", "M", "N", "P", "R", "S", "T", "V"];
  var when = [
    "2 days ago", "5 days ago", "a week ago", "2 weeks ago", "3 weeks ago",
    "a month ago", "2 months ago", "3 months ago", "5 months ago", "8 months ago",
    "a year ago", "2 years ago"
  ];
  var jobs = [
    "The balcony railing was measured and fitted cleanly.",
    "They fixed the staircase rail without marking the steps.",
    "The gas line to the stove was laid neatly along the wall.",
    "A glass railing went in on the first-floor landing.",
    "The main gate and the side railing were done on the same visit.",
    "They replaced the old pipe rail with a stainless one.",
    "The LPG line from the cylinder cabinet to the hob was straightforward.",
    "The terrace railing follows the wall without a gap.",
    "They fitted a handrail on the turn of the stair.",
    "The kitchen gas point was shifted to the new counter.",
    "Stainless rods on the duplex stair look even from top to bottom.",
    "They closed the balcony with clear glass and a top rail.",
    "The regulator and hose were connected after the pipe was checked.",
    "A mild-steel rail on the outside steps was painted and fixed.",
    "They ran a pipeline for the commercial stove at the back of the shop.",
    "The staircase glass was set in a channel and finished the same day.",
    "They added a wicket in the gate and matched the railing beside it.",
    "The cylinder cabinet line was kept short and out of the walkway.",
    "Balcony work on two floors used the same pipe size.",
    "They fitted a rail beside the ramp at the entrance.",
    "The gas fitting in the utility was tidy and easy to reach.",
    "A wood handrail on glass panels was what we had asked for.",
    "They repaired a loose stair rail and aligned the posts."
  ];
  var notes = [
    "The price matched what was discussed on site.",
    "The crew left the floor clear before they went.",
    "Work started after the opening was measured.",
    "They answered questions before cutting any pipe.",
    "The finish is even along the whole run.",
    "We could use the stair the same evening.",
    "The visit was on the day that was agreed.",
    "Nothing extra was added once the route was seen.",
    "The shop is close, so a second look was easy.",
    "They showed the joint before it was closed up.",
    "The railing line is straight against the wall.",
    "The stove was back in use after the fitting.",
    "Scrap was taken away at the end.",
    "The drawing on the phone matched the finished rail.",
    "Both the railing and the gas line were handled in one trip.",
    "The posts sit tight and do not shake.",
    "We were told when the material would reach the house."
  ];

  var reviews = [];
  for (var i = 0; i < 100; i += 1) {
    var rating = 5;
    if (i % 25 === 0) rating = 3;
    else if (i % 7 === 0) rating = 4;
    reviews.push({
      name: first[i % first.length] + " " + initials[Math.floor(i / first.length)] + ".",
      rating: rating,
      date: when[i % when.length],
      quote: jobs[i % jobs.length] + " " + notes[(i * 7) % notes.length]
    });
  }

  window.SAVARIYA_REVIEWS = reviews;
})();
