var pagination = $('.pagination');

function setPagination(){
	 pagination.jPages({
     containerID: 'card-Container',
     perPage: 6,
     startPage: 1,
     startRange: 1,
     midRange: 3,
     endRange: 1,
     first: false,
     last: false
   });
}

function destroyPagination() {
  pagination.jPages('destroy');
};

setPagination();

$('#card-Container').mixItUp({
  callbacks: {
    onMixLoad: function(state,futureState ){
      console.log('mix Loaded');
      //setPagination();
    },
    onMixStart: function(state,futureState ){
      destroyPagination();
    },
		onMixEnd: function(state, futureState){
			console.log('mix End');
      setPagination();
		}
	}
});
      // Filter function
      $('.filter').click(function () {
        var filterValue = $(this).attr('data-filter');
        if (filterValue === 'all') {
          $('#card-Container').mixItUp('filter', 'all');
        } else {
          $('#card-Container').mixItUp('filter', '.' + filterValue);
        }
      });