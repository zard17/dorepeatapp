'use strict';

angular.module('DoRepeatApp.service')
  .value ('mongolabApiKey', '70oVLtWb_eu9UfRhiYm4XNll4uKHGd9W')
  .factory ('RepeatResource', function ($resource, mongolabApiKey) {
    return $resource('https://api.mongolab.com/api/1/databases/dorepeat/collections/todos/:repeatId?apiKey=:apiKey',
      { apiKey: mongolabApiKey }, {'update' : { method : 'PUT'} }
    );
  })
  .factory ('RepeatHandle', function (RepeatResource) {

    var RepeatHandle = {};
    var repeatList = null;
    var repeatIndexToUpdate = 0;

    function setId(idx, id) {
      repeatList[idx]._id = { $oid : id };
    }

    function updateRepeatList(setRepeatFunc) {
      console.log('updateRepeatList');
      RepeatResource.query (function (result) {
        repeatList = result;
        setRepeatFunc(repeatList);
      });
    }

    function copyRepeat(src, dst) {
      dst.title = src.title;
      dst.description = src.description;
      dst.checklist = src.checklist;
    }

    RepeatHandle.selectRepeatList = function(setRepeatFunc) {
      if (repeatList === null) {
        updateRepeatList(setRepeatFunc);
      }
      else {
        setRepeatFunc(repeatList);
      }
    };

    RepeatHandle.selectRepeatByIndex = function (index) {
      return repeatList[index];
    };

    RepeatHandle.setRepeatIndexToUpdate = function (index) {
      repeatIndexToUpdate = index;
    };

    RepeatHandle.getRepeatIndexToUpdate = function () {
      console.log('[RepeatHandleSvc] repeatIndexToUpdate = ' + repeatIndexToUpdate);
      return repeatIndexToUpdate;
    };

    RepeatHandle.addNewRepeat = function (repeat) {
      var newRepeat = new RepeatResource();
      copyRepeat(repeat, newRepeat);
      var idx = repeatList.push(newRepeat) - 1;
      newRepeat.$save(function(ret) {
        console.log(ret._id.$oid);
        setId(idx, ret._id.$oid);
      });
    };

    RepeatHandle.updateRepeat = function (repeat, index) {
      copyRepeat(repeat, repeatList[index]);
      RepeatResource.update({repeatId: repeat._id.$oid},
        JSON.stringify({
          title: repeat.title,
          description: repeat.description,
          checklist: repeat.checklist
        }));
    };

    return RepeatHandle;
  });
