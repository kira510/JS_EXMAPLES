let setupTooltip = function () {
    let tooltip = '',
        tooltipDiv = document.querySelector('.tooltip'),
        liElements = Array.from(document.querySelectorAll('.tooltipOnHover')),
        timer;

    let displayTooltip = function (e, obj) {
      tooltip = obj.dataset.tooltip;
      tooltipDiv.innerHTML = tooltip;
      tooltipDiv.style.top = e.pageY + "px";
      tooltipDiv.style.left = e.pageX + "px";
      //tooltipDiv.style.opacity = 1;
      fadeIn(tooltipDiv);
    }

    let fadeOut = function (element) {
        let op = 1;

        if (!timer) {
            timer = setInterval(function () {
                if (op <= 0.1) {
                    clearInterval(timer);
                    timer = null;
                    element.style.opacity = 0;
                    element.style.display = 'none';
                }
                element.style.opacity = op;
                op -= op*0.1;
            }, 10);
        }
    };

    let fadeIn = function (element) {
        let op = 0.1;

        element.style.display = 'block';
        timer = setInterval(function () {
            if (op >= 1) {
                clearInterval(timer);
                timer = null;
                element.style.opacity = 1;
            }
            element.style.opacity = op;
            op += op*0.1;
        }, 10);
    };

    liElements.forEach(function (ele) {
      let timeout;
      ele.addEventListener('mouseenter', function (e) {
          timeout = setTimeout(function (obj) {
            displayTooltip(e, obj);
          },400, this)
      });
      ele.addEventListener('mouseleave', function(e) {
        //tooltipDiv.style.opacity = 0;
        clearTimeout(timeout);
        fadeOut(tooltipDiv);
      });
    });

  }

  setupTooltip();