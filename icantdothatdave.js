$(document).ready(function() {
  imSorryDaveImAfraidICantDoThat();

  // Facebook doesn't reload almost ever, so we have to check repeatedly
  setInterval(imSorryDaveImAfraidICantDoThat, 10000);
});

function imSorryDaveImAfraidICantDoThat() {
  // Fetch comments from Dave
  var daveComments = $('li.UFIComment div.UFICommentContent[dave!=true]').has('a.UFICommentActorName[href="https://www.facebook.com/davefontenot"]');
  $.each(daveComments, function(idx, comment) {
    // Mark that we've processed this already
    $(comment).attr('dave', true);

    var text = $(comment).find('span span span').html();
    if (text) {
      var match = text.match(/he(l+)\s?yeah.*/i);

      // Test if Dave's comment matches what it should
      if (match) {
        var commentId = $(comment).attr('data-reactid').match(/\{comment(\d*_?\d*)\}/)[1];
        var num_ls = match[1].length;

        // Log and move on
        $.get('http://hellyeah.muri.ca/report?comment_id=' + commentId + '&num_ls=' + num_ls);
      }
    }
  });
}