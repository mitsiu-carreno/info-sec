{
  description = "NestJs project dev shell";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { nixpkgs, flake-utils, ...}:
    flake-utils.lib.eachDefaultSystem (system: let
      pkgs = nixpkgs.legacyPackages.${system};
    in {
      devShells.default = pkgs.mkShell {
        packages = with pkgs; [
          nodejs_22
          yarn
          python312
          python312Packages.pip
          python312Packages.virtualenv
        ];

        shellHook = ''
          echo "Node $(node --version)"
          echo "npm $(npm --version)"
          echo "yarn $(yarn --version)"

          echo "npx @nestjs/cli new <project>"
          if [ ! -d .venv ]; then
            python -m venv .venv
          fi

          source .venv/bin/activate

          echo "Virtualenv activated"

          if [ -f requirements.txt ]; then
            pip install -r requirements.txt
          fi
        '';
      };
    });
}
