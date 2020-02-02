//get a list of element which should be replaced by other sources and loop through them.
document.querySelectorAll('require[src]').forEach(target => {
    //obtain the content of the source and convert it to plain text.
    fetch(target.getAttribute('src'), {
        method: 'get'
    }).then(res => res.text()).then(res => {
        //parse the content of the remote source.
        var parsed = document.createElement('parsed');
        parsed.innerHTML = res;

        //if there are more elements then one, insert them after the require-element in the correct order.
        if (parsed.children.length > 1) for(var i = 1; i < parsed.children.length; i++) target.parentNode.insertBefore(parsed.children[i], target.nextSibling)

        //replace the require-element with the first element found in the remote source.
        target.parentNode.replaceChild(parsed.children[0], target);
    })
});

//get a list of elements wherefrom this innerHTML should be replaced with a remote source.
document.querySelectorAll('[inner-src]').forEach(target => {
    //obtain the content of the source and convert it to plain text.
    fetch(target.getAttribute('inner-src'), {
        method: 'get'
    }).then(res => res.text()).then(res => {
        //fill the innerHTML of the target element with the remote source.
        target.innerHTML = res;
    })
})

window.addEventListener('hashchange', e => {
    showPreloader();

    //check if the hash of the current location is empty and load the correct page.
    if (location.hash === '' || location.hash === '#/') {
        //hash of current location is empty, load the homepage.
        fetch('/views/home.html', {
            method: 'get'
        }).then(res => res.text()).then(res => {
            //fill the innerHTML of the content element with the content of the 404 page.
            document.querySelector('body div.content').innerHTML = res;

            //scroll to the top of the page
            window.scrollTo(0, 0);

            //reload all the potential scripts from the retrieved page.
            document.querySelector('body div.content').reloadScripts();

            //close the mobile navbar menu.
            document.querySelector('div.navbar #toggle').checked = false;

            //initialize all the links for the navigation system
            initializeLinks();

            //hide the preloader
            hidePreloader();
        })
    } else {
        //hash is not empty, process it.

        //remove '#' from the hash;
        var path = location.hash.substring(1);

        //make sure the first character of the location is '/'.
        var path = (path.charAt(0) === '/' ? path : '/' + path);

        //check if there is an extention at the and of the url, else fill it with .html.
        var path = (path.split('.').length > 1 ? path : path + '.html');

        //obtain the content of the specific page.
        fetch('/views' + path, {
            method: 'get'
        }).then(res => {
            //check status of page.
            if (res.status == 200) {
                //page obtained correctly, loading it into the .content element.
                return res.text()
            } else if (res.status == 404) {
                //page not found, obtaining status page.
                fetch('/views/404.html', {
                    method: 'get'
                }).then(res => res.text()).then(res => {
                    //fill the innerHTML of the content element with the content of the 404 page.
                    document.querySelector('body div.content').innerHTML = res;

                    //scroll to the top of the page
                    window.scrollTo(0, 0);

                    //reload all the potential scripts from the retrieved page.
                    document.querySelector('body div.content').reloadScripts();

                    //close the mobile navbar menu.
                    document.querySelector('div.navbar #toggle').checked = false;

                    //initialize all the links for the navigation system
                    initializeLinks();

                    //hide the preloader
                    hidePreloader();
                })

                return false;
            } else {
                alert('An error occured, please reload the page or try to clear the url');
                return false;
            }
        }).then(res => {
            if (res !== false) {
                //fill the innerHTML of the content element with the content of the 404 page.
                document.querySelector('body div.content').innerHTML = res;

                //scroll to the top of the page
                window.scrollTo(0, 0);

                //reload all the potential scripts from the retrieved page.
                document.querySelector('body div.content').reloadScripts();

                //close the mobile navbar menu.
                document.querySelector('div.navbar #toggle').checked = false;

                //initialize all the links for the navigation system
                initializeLinks();

                //hide the preloader
                hidePreloader();
            }
        })
    }
});

//manually trigger the hashchange event on the window object to load the contents of the page.
window.dispatchEvent(new CustomEvent('hashchange'));

//this variable is to add a short delay after the preloader has been opened to make sure it won't just flash open and close really fast aftwerwards.
var preloaderHidden = false;

//close the preloader
function hidePreloader() {
    //check if preloader can be closed.
    if (preloaderHidden) {
        //set preloaderHidden to the 'trigger' state.
        preloaderHidden = 'trigger';

        //set a timeout to make sure the preloader won't be opened for an infinite time if an error occured.
        setTimeout(() => {
            //if the preloaderHidden state still is 'trigger', reset it to false and manually close the preloader.
            if (preloaderHidden == 'trigger') {
                preloaderHidden = false;
                hidePreloader();
            }
        }, 1000);
    } else {
        //select the preloader.
        var preloader = document.querySelector('body div.preloader');

        //fade out the preloader.
        preloader.style.opacity = 0;

        //once the preloader has been faded out, fully hide it.
        setTimeout(() => preloader.style.display = 'none', 200);
    }
}

//open the preloader
function showPreloader() {
    //select the preloader.
    var preloader = document.querySelector('body div.preloader');

    //show the preloader as a block.
    preloader.style.display = 'block';

    //fade in the preloader.
    preloader.style.opacity = 1;

    //make sure the preloader will be showed for at least half a second.
    preloaderHidden = true;

    //set a timeout to make sure the preloader can evatually be closed again.
    setTimeout(() => {
        //if the preloaderHidden state is 'trigger', not only reset the preloaderHidden state to false but also close the preloader.
        if (preloaderHidden == 'trigger') {
            preloaderHidden = false;
            hidePreloader();
        } else {
            preloaderHidden = false;
        }
    }, 500);
}

//make sure the preloader will be opened once the user leaves or reloads the page
window.addEventListener('beforeunload', showPreloader);

//initialize all links so that they work with the applied navigation system
function initializeLinks() {
    //loop through all the links in the page
    document.querySelectorAll('a').forEach(link => {
        //filter all the targeted links
        //if the link contains the 'nonav' attribute, we skip it since it is marked for the filter not to be applied to the link
        //if the link's hostname contains michadevries.nl or if it is empty (since this can work without a webserver), it's a target.
        //if the link's target is set to '_blank' (new tab), we skip it.
        //if the filter was already applied to the link (link.initialized), we skip it.
        if (link.getAttribute('nonav') === null && (link.hostname.includes('michadevries.nl') || link.hostname == '') && link.getAttribute('target') !== '_blank' && !link.initialized) {
            link.addEventListener('click', e => {
                //prevent the default click event of the link.
                e.preventDefault();

                //make sure the link is accountable for the navigation system.
                var path = link.getAttribute('href');
                if (path.charAt(0) == '#') path = path.substring(1);
                if (path.charAt(0) == '/') path = path.substring(1);

                //not the old hash.
                var old = location.hash;

                //apply the new hash.
                location.hash = path;

                //if the hash didn't change, we assume the client want's to fully reload the page.
                if (old === location.hash) location.reload();
            });
        }

        //if the link's target is set to '_blank', the 'nonav' attribute is not preset and the link is torgeted to our local domain, make sure the url is formatted correctly.
        if (link.getAttribute('nonav') === null && (link.hostname.includes('michadevries.nl') || link.hostname == '') && link.getAttribute('target') === '_blank') {
            //store the url in a variable.
            var path = link.getAttribute('href');

            //if the first character of the url is '/', remove it.
            if (path.charAt(0) == '/') path = path.substring(1);

            //if the first character of the string is not '#', apply it.
            if (path.charAt(0) != '#') path = '#' + path;

            //update the url of the link.
            link.setAttribute('href', path);
        }

        //after applying the filter, we make sure it won't be applied a second time.
        link.initialized = true;
    })
}

//used when the content of the page is changed to force possible script tags to load.
HTMLElement.prototype.reloadScripts = function() {
    //select all the scripts.
    this.querySelectorAll('script').forEach(script => {
        //create a replacement script tag.
        var replacement = document.createElement('script');

        //copy over all the attributes of the script tag.
        for (var i = 0; i < script.attributes.length; i++) replacement.setAttribute(script.attributes[i].name, script.attributes[i].value);

        //if no src/source was defined, copy over the contents of the script tag.
        if (script.getAttribute('src') === null) replacement.innerHTML = script.innerHTML;

        //replace the script tag with the replacement so it will reload.
        script.parentNode.replaceChild(replacement, script);
    })
}

// OFFLINE SUPPORT
    // Register the service worker.
    if ('serviceWorker' in navigator) navigator.serviceWorker.register('/service-worker-offline.js').then(registration => {
        console.log('ServiceWorker registered, scope: ', registration.scope);
    }).catch(err => {
        console.log('ServiceWorker registration failed: ', err);
    });

    //add event listeners.
    window.addEventListener('online',  e => document.querySelector('html').setAttribute('offline', 'false'));
    window.addEventListener('offline', e => document.querySelector('html').setAttribute('offline', 'true'));
    document.querySelector('html').setAttribute('offline', (!navigator.onLine).toString());
