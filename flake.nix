{
  description = "Modern Web Push library";

  inputs.nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";

  outputs = { nixpkgs, ... }:
    let
      systems = [ "x86_64-linux" "aarch64-linux" "x86_64-darwin" "aarch64-darwin" ];
      forAllSystems = f: nixpkgs.lib.genAttrs systems (system: f nixpkgs.legacyPackages.${system});
    in {
      devShells = forAllSystems (pkgs: {
        default = pkgs.mkShellNoCC {
          buildInputs = with pkgs; [
            pnpm_10
            typos
            typos-lsp
            jq
            git
            gh
            lefthook
            nixfmt-rfc-style
          ];

          shellHook = ''
            if [ ! -f node_modules/.pnpm/lock.yaml ] || [ pnpm-lock.yaml -nt node_modules/.pnpm/lock.yaml ]; then
              echo "Installing dependencies..."
              pnpm install --frozen-lockfile
            fi

            lefthook install > /dev/null 2>&1
          '';
        };
      });
    };
}
