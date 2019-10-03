const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  const result = this.journeys.map((journey) => {
    return journey.startLocation;
  })
  return result;
};

Traveller.prototype.getJourneyEndLocations = function () {
  const result = this.journeys.map((journey) => {
    return journey.endLocation;
  })
  return result;
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  const result = this.journeys.filter((journey) => {
    if(transport === journey.transport){
      return journey;
    }
  })
  return result;
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const result = this.journeys.filter((journey) => {
    if(journey.distance >= minDistance){
      return journey;
    }
  })
  return result;
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  let result = this.journeys.reduce((totalDistance, journey) => {
    return totalDistance += journey.distance;
  }, 0)
  return result;
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  return this.journeys.reduce((transportList, journey) => {
    if (transportList.includes(journey.transport) == false) {
      transportList.push(journey.transport)
    }
    return transportList;
  }, [])
};


module.exports = Traveller;
