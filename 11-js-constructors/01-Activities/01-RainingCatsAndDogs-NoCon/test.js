function makeNoise() {
    if (this.raining) {
        console.log(this.noise);
    }
}

let dogs = {
    raining: true,
    noise: "Woof!",
};
dogs.makeNoise = makeNoise;

dogs.makeNoise();