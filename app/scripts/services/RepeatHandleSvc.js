angular.module('DoRepeatApp.service')
	.factory ('RepeatResource', [function () {

    var repeatList = [
      {"title": "Go to a gym", "description": "exercise every morning at 8 o'clock", "checklist": ['run 10 km', 'crunch 50 times'], "show" : false},
      {"title": "Study English", "description": "Study Good Morning Pops everyday", "checklist": ['listen to broadcast', 'write down essay'], "show" : false},
      {"title": "Eat lunch", "description": "Eat fresh food without meat", "checklist": ['drink milk'], "show" : false}
    ];

    var repeatIndexToUpdate = 0;

		return {
			addNewRepeat: function (newRepeat) {
				repeatList.push(newRepeat);
				console.log('Repeat List Length = ' + repeatList.length);
			},

			updateRepeat: function (updatedRepeat, index) {
				repeatList[index] = updatedRepeat;
			},

			deleteRepeat: function (index) {
				repeatList.splice(index, 1);
			},

			selectRepeat: function () {
				return repeatList;
			},

			selectRepeatByIndex: function (index) {
				return repeatList[index];
			},

			setRepeatIndexToUpdate: function (index) {
				repeatIndexToUpdate = index;				
			},

			getRepeatIndexToUpdate: function () {
				console.log('[RepeatHandleSvc] repeatIndexToUpdate = ' + repeatIndexToUpdate);
				return repeatIndexToUpdate;
			}
				
		}
	}]);
