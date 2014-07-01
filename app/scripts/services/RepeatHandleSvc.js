angular.module('DoRepeatApp.service')
	.factory ('RepeatResource', [function () {

    var repeatList = [
      {"title": "Go to a gym", "description": "exercise every morning at 8 o'clock", "checklist": ['run 10 km', 'crunch 50 times'], "show" : false},
      {"title": "Study English", "description": "Study Good Morning Pops everyday", "checklist": ['listen to broadcast', 'write down essay'], "show" : false},
      {"title": "Eat lunch", "description": "Eat fresh food without meat", "checklist": ['drink milk'], "show" : false}
    ];

		return {
			addNewRepeat: function (newRepeat) {
				repeatList.push(newRepeat);
				console.log('Repeat List Length = ' + repeatList.length);
			},

			updateRepeat: function (idx, updatedRepeat) {
				repeatList[idx] = updatedRepeat;
			},

			deleteRepeat: function (idx) {
				repeatList.splice(idx, 1);
			},

			selectRepeat: function () {
				return repeatList;
			}
		}
	}]);
