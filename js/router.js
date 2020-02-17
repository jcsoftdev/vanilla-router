class Router{
    constructor(routes){
        this.routes = routes;
        this._loadInitialRoute();
    }
    loadRoute(...urlSegs){
        const matchedRoute = this._matchUrlToRoute(urlSegs)
        const url = `${urlSegs.join('/')}`;
        history.pushState({},'this works', url)

        const routerOutElement = document.querySelectorAll('[data-router]')[0];
        routerOutElement.innerHTML = matchedRoute.template;
    }
    _matchUrlToRoute(urlSegs){
        const matchedRoute = this.routes.find(route=>{
            const routePathSegs = route.path.split('/').slice(1)
            // console.log(route.path.split('/').slice(1))
            // console.log(urlSegs)
            console.log('rpsegs , ', routePathSegs)
            if (routePathSegs.length !== urlSegs.length) {
                console.log(routePathSegs)
                console.log(urlSegs)
                return false;
            }
            // return routePathSegs.every((routePathSeg, i)=>routePathSeg === urlSegs[i])
            return routePathSegs
            .every((routePathSeg, i) => routePathSeg === urlSegs[i]);
        })
        console.log(matchedRoute)
        return matchedRoute;
    }
    _loadInitialRoute(){
        const pathNameSplit = window.location.pathname.split('/');
        const pathSegs = pathNameSplit.length > 1 ? pathNameSplit.slice(1):'';
        // console.log(pathSegs)
        this.loadRoute(...pathSegs);
        
    }
}