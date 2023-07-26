function extensibleObject() {

    let obj = {
        extend: function (template) {

            for (let key of Object.keys(template)) {
                let value = template[key];
              
                if (typeof value === 'function') {
                    Object.getPrototypeOf(obj)[key] = value;
                } else {
                    obj[key] = value;
                };
            }
        },
    };

    return obj;

}
