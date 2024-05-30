export function Team() {
    return (
      <div className="rounded-xl overflow-hidden">
        <div className="relative h-full w-full">
          <img
            src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
            alt="image 1"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
            <div className="w-3/4 text-center md:w-2/4">
              <h1 className="mb-4 text-3xl md:text-4xl lg:text-5xl text-white">
                The Beauty of Nature
              </h1>
              <p className="mb-12 opacity-80 text-white">
                It is not so much for its beauty that the forest makes a claim
                upon men's hearts, as for that subtle something, that quality
                of air that emanation from old trees, that so wonderfully changes
                and renews a weary spirit.
              </p>
              <div className="flex justify-center gap-2">
                <button className="bg-white text-black py-2 px-4 rounded-lg">
                  Explore
                </button>
                <button className="bg-transparent border border-white text-white py-2 px-4 rounded-lg">
                  Gallery
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Repeat the above div structure for each slide */}
      </div>
    );
  }
  