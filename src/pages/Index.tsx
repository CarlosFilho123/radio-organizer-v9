// Update this page (the content is just a fallback if you fail to update the page)

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto p-6">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            📻 IPTV Player v9 Silva - Atualizado
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            Rádios brasileiras organizadas por estado em ordem alfabética
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="p-6 rounded-lg border bg-card">
              <div className="text-2xl mb-2">🎯</div>
              <h3 className="font-semibold mb-2">Organização Perfeita</h3>
              <p className="text-sm text-muted-foreground">
                Rádios organizadas alfabeticamente dentro de cada estado
              </p>
            </div>
            <div className="p-6 rounded-lg border bg-card">
              <div className="text-2xl mb-2">🗺️</div>
              <h3 className="font-semibold mb-2">Por Estados</h3>
              <p className="text-sm text-muted-foreground">
                CE, MA, MG, PA, PI, RJ, SP + Rádios Nacionais
              </p>
            </div>
            <div className="p-6 rounded-lg border bg-card">
              <div className="text-2xl mb-2">❤️</div>
              <h3 className="font-semibold mb-2">Favoritos</h3>
              <p className="text-sm text-muted-foreground">
                Sistema de favoritos persistente e intuitivo
              </p>
            </div>
          </div>

          <div className="bg-card border rounded-lg p-6 mb-6">
            <h2 className="text-2xl font-semibold mb-4">🎧 Player IPTV Completo</h2>
            <div className="aspect-video w-full">
              <iframe 
                src="/src/assets/iptv-player-v9-atualizado.html"
                className="w-full h-full rounded-lg border"
                title="IPTV Player v9 Silva Atualizado"
                allowFullScreen
              />
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-4 rounded border bg-card">
              <div className="text-lg font-bold text-primary">🇧🇷</div>
              <div className="text-sm">Nacional</div>
            </div>
            <div className="p-4 rounded border bg-card">
              <div className="text-lg font-bold text-primary">🏖️</div>
              <div className="text-sm">CE • RJ</div>
            </div>
            <div className="p-4 rounded border bg-card">
              <div className="text-lg font-bold text-primary">🌴</div>
              <div className="text-sm">MA • PA</div>
            </div>
            <div className="p-4 rounded border bg-card">
              <div className="text-lg font-bold text-primary">⛰️</div>
              <div className="text-sm">MG • SP • PI</div>
            </div>
          </div>

          <div className="mt-8 p-4 bg-primary/10 rounded-lg border">
            <p className="text-sm text-muted-foreground">
              ✨ <strong>Melhorias implementadas:</strong> Rádios organizadas alfabeticamente por estado, 
              interface moderna, badges de identificação, sistema de favoritos e reprodução otimizada.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
