// TODO: change "demo" into actual vars
// TODO: WRAP THIS IN A SANE WAY WHY DO I HAVE GLOBAL VARS

var pubnub = PUBNUB.init({
     publish_key   : 'pub-c-e26ee787-87f4-4c51-bf15-e947dc94de97',
     subscribe_key : 'sub-c-c213022c-f8aa-11e3-aa40-02ee2ddab7fe'
});

var channel = 'demo_client_id2';



function pubNubSub(content) {
	// TODO: debug several subs without refresh don't work. Move "subscribe" outside and work with "publish"
     pubnub.subscribe({
         channel : channel,
         message : function(m){ console.log(m) },
         connect : publish
     });

     function publish() {
         pubnub.publish({
             channel : channel,
             message : angular.toJson(content)
         })
     }
}

function pubNubRead(cb) {
	pubnub.history({
		channel: channel,
		count: 100,
		callback: function(a){
			cb(a[0]);
		}
	});

}


/* TODO:

		$scope.subscribe = function() {
	//  ...
	  		PubNub.ngSubscribe({ channel: theChannel })
	 // ...
		  $rootScope.$on(PubNub.ngMsgEv(theChannel), function(event, payload) {
	    // payload contains message, channel, env...
	    console.log('got a message event:', payload);    
	  })
	}

*/