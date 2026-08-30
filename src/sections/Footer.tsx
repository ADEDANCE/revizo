function Footer() {
  return (
    <footer className="bg-slate border border-t-2 shadow px-6 py-10">
      <div className="flex flex-col gap-10 md:flex-row md:justify-between">
        {/* Brand */}
        <div className="flex flex-col">
          <h4 className="font-bold text-off-white text-2xl">Revizo</h4>

          <p className="max-w-xs text-slate-300">
            Upload your materials and build the study resources that help you
            learn with confidence.
          </p>
        </div>

        {/* Links */}

        {/* Navigation */}
        <div className="text-gray-300">
          <h4 className="font-bold text-white">Navigation</h4>

          <ul className="mt-3 space-y-2">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/#features">Features</a>
            </li>
            <li>
              <a href="/#how-it-works">How It Works</a>
            </li>
            <li>
              <a href="/#about">About</a>
            </li>
          </ul>
        </div>

        {/* Product */}
        <div className="text-gray-300">
          <h4 className="font-bold text-white">Product</h4>

          <ul className="mt-3 space-y-2">
            <li>Explanation</li>
            <li>Summary</li>
            <li>MCQ</li>
            <li>Flashcards</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
