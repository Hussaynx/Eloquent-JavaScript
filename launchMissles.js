let launchMissles = function() {
    missleSystem.launch("now");
};
if (safeMode) {
    launchMissles = function() {
        
    }
}