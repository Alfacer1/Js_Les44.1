function buildRoute(routeTemplate, params) {
  const filledRoute = routeTemplate.replace(/:\w+-id/g, match => {
      const paramName = match.slice(1, -3);
      return params.hasOwnProperty(paramName) ? params[paramName] : match;
  });

  return filledRoute;
}

console.log(buildRoute('/user/:user-id/create', { userId: 1 }));
console.log(buildRoute('/:tour-id/:game-id/:player-id/goal', { tourId: 1, gameId: 14, playerId: 125151 })); // '/1/14/125151/goal'
