
var n1 = 1;
(window.onresize = () => {
    
    //////////////////////////////////////////////////////////////////////////////////////
    
    if (window.innerWidth <= 710) {
        if (window.innerWidth <= 700) {
            document.querySelector('section').style.marginLeft = '10px';
            document.querySelector('aside').style.margin = '0px 0px 50px -4px';
        }
        
        if (window.innerWidth < 600) {
            document.querySelector('aside').style.width = '440px';
        }

        document.querySelector('table').style.marginBottom ='0'
        document.querySelectorAll('table tbody td').forEach((vl) => { vl.style.minWidth = '54px' });
        document.querySelector('table').style.cssText = 'width: 100%; max-width: 686px;';
        document.querySelectorAll('th.tres').forEach((vl) => {
            vl.style.width = 'none';
        })
        document.querySelectorAll('tbody td.num0').forEach((vl) => {
            vl.style.cssText = 'left: 82px; padding-right: 10px; min-width: 0;'
        });
        document.querySelectorAll("tbody th.inteiro").forEach((vl) => {
            vl.style.display = 'none';
        });

        document.querySelectorAll('tbody th.tres').forEach((vl) => {
            vl.style.display = 'block';
            vl.style.width = '';
        });

        document.querySelector("thead th:first-child").style.left = '1px';
 
    }

    if (window.innerWidth > 709 && window.innerWidth <= 723) {
        document.querySelector("thead th:first-child").style.left = '';
        document.querySelector('section').style.marginLeft = '50px';
        document.querySelector('table').style.cssText = 'width:100%; max-width: 655px;';
        document.querySelectorAll('table tbody td').forEach((vl) => { vl.style.minWidth = '47px' });
        document.querySelectorAll('tbody td.num0').forEach((vl) => {
            vl.style.cssText = 'left: 82px;  min-width: 0;'
        });
        
        document.querySelectorAll("tbody th.inteiro").forEach((vl) => {
            vl.style.display = 'none';
        });
        
        document.querySelectorAll('tbody th.tres').forEach((vl) => {
            vl.style.display = 'block';
            vl.style.width = '';
        });
        document.querySelector('aside').style.margin = '0px 0px 50px 35px';
    }else if (window.innerWidth > 730) {
        document.querySelector("thead th:first-child").style.left = '';
        document.querySelector('table').style.cssText = 'width: 750px;';
        document.querySelectorAll('tbody td.num0').forEach((vl) => {
            vl.style.cssText = ''
        });
        document.querySelectorAll('table tbody td').forEach((vl)=>{
            vl.style.cssText = '';
        });
        document.querySelectorAll('tbody th.tres').forEach((vl) => {
            vl.style.display = 'none';
        });
        document.querySelectorAll("tbody th.inteiro").forEach((vl) => {
            vl.style.display = 'block';
        });
        document.querySelector('section').style.marginLeft = '50px';
        document.querySelector('aside').style.margin = '0px 0px 50px 35px';
    }

    if(window.innerWidth < 805 && window.innerWidth > 600) {
        document.querySelector('aside').style.width = '570px';
    }

    if (window.innerWidth < 817) {
        document.querySelector('table').style.marginBottom = '0';
    }

    if(window.innerWidth > 805 && window.innerWidth <= 825) {
        document.querySelector('aside').style.width = '754px';
    }

    if(window.innerWidth > 825) {
        document.querySelector('aside').style.width = '570px';
    }

    if (window.innerWidth <= 1355) {
        n1 = 2;
        document.querySelector('thead th:first-child').style.borderRight = '1px solid #292929';
        document.querySelectorAll('tbody td.num0').forEach((vl, ch) => {
            vl.style.borderRight = '1px solid #000';
        });

    } else if (window.innerWidth > 1355) {
        n1 = 1;
        document.querySelector('thead th:first-child').style.borderRight = 'none';
        document.querySelectorAll('tbody td.num0').forEach((vl) => {
            vl.style.borderRight = 'none';
        });
    }
})()