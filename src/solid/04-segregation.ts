// interface Bird {
//   eating(): void;
//   flying(): void;
//   running(): void;
//   swimming(): void;
// }
interface Bird {
  eating(): void;
}

interface FlyingBird {
  flying(): void;
}

interface RunningBird{
  running(): void;
}

interface SwimmingBird {
  swimming(): void;
}


class Tucan implements Bird, FlyingBird {
  public flying(){}
  public eating(){}
}

class Hummingbird implements Bird, FlyingBird {
  public flying(){}
  public eating(){}

}

class Ostrich implements Bird, RunningBird {
  public eating(){}
  public running(){}
}

class Penguin implements Bird, SwimmingBird {
  public eating(){}
  public swimming(){}
}