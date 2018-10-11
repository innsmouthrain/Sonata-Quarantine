export class Room {
}

export class Map {
  // var rooms = []; // specifically an array of Room objects

  constructor(height, width, depth, rooms) {
    this.coords = new Array(height);
    this.coords[0] = new Array(width);
    this.coords[0][0] = new Array(depth);

    if (undefined !== rooms) {
      rooms.foreEach( (e) => {
        this.coords[e.x][e.y][e.z].push(e);
      });
    }

  }
}

