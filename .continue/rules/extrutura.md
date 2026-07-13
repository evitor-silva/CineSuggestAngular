---
description: esse é um projeto em angular utiliza bootstrap package, components reutilizaveis em src/app/components
---

esse é um projeto em angular utiliza bootstrap package, components reutilizaveis em src/app/components, os modulos funcionam assim o html é o component.html, o component.ts é onde fica a logica de negocio o resto é autoexplicativo<div class="min-h-screen bg-dark text-light">
  <header class="bg-dark py-4">
    <div class="container mx-auto px-4 flex justify-between items-center">
      <h1 class="text-2xl font-bold">Filmes</h1>
      <div class="flex gap-2">
        <input type="text" class="form-control form-control-sm bg-gray-800 border-0 text-light" 
               placeholder="Buscar filmes...">
        <button class="btn btn-primary btn-sm">Buscar</button>
      </div>
    </div>
  </header>

  <main class="container mx-auto px-4 py-8">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div *ngFor="let movie of movies" class="bg-gray-800 rounded-lg overflow-hidden shadow-md transition-all hover:shadow-lg">
        <div class="relative">
          <img [src]="movie.poster" 
               class="w-full h-48 object-cover" 
               alt="Poster do filme {{ movie.title }}">
          <div class="absolute top-2 right-2 bg-primary text-white text-xs px-2 py-1 rounded">Novo</div>
        </div>
        
        <div class="p-4">
          <h3 class="text-lg font-semibold mb-1">{{ movie.title }}</h3>
          <div class="flex items-center mb-2">
            <span class="text-yellow-400 text-sm me-1">⭐</span>
            <span class="text-gray-400 text-sm">{{ movie.rating }}</span>
          </div>
          <p class="text-gray-300 text-sm line-clamp-2">{{ movie.synopsis }}</p>
          <div class="mt-2 flex justify-between items-center">
            <span class="text-gray-400 text-sm">Ano: {{ movie.year }}</span>
            <button class="text-primary text-sm hover:underline">Ver detalhes</button>
          </div>
        </div>
      </div>
    </div>
    
    <div *ngIf="movies.length === 0" class="text-center py-12">
      <div class="text-3xl mb-4">Nenhum filme encontrado</div>
      <p class="text-gray-400">Tente buscar por um filme específico ou ver nossos lançamentos</p>
    </div>
  </main>

  <footer class="bg-dark py-4 mt-8">
    <div class="container mx-auto px-4 text-center text-gray-400">
      <p>© 2023 Site de Filmes | Feito com Angular + Bootstrap 5</p>
    </div>
  </footer>
</div>
