define(
	['underscore'], 
	function(_){
		var Event = {
			listeners: null,
			listen: function(listener, self){
				if(this.listeners === null){
					this.listeners = [];
				}
				if (self === undefined){
					this.listeners.push(listener);
				}
				else {
					this.listeners.push([listener, self]);
				}
    			
    		},
    		fireChanged: function(eventName,  newValue, oldValue){
    			var that = this;
				_.each(this.listeners, function(listener){
					if (_.isArray(listener)){
						var callback = listener[0];
						var self = listener[1];
						callback.apply(self, [that, eventName, newValue, oldValue]);
					}
					else {
						listener(that, eventName, newValue, oldValue);	
					}
				});
			},
		};

		return Event;
	}
);
