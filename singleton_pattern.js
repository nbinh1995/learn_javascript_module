const singleton = (function () {
  let instance;

  function init() {
    return {
      name: "Peter",
      age: 24,
    };
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = init();
      }

      return instance;
    },
  };
})();
