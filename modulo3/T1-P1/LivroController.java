import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor
public class LivroController {

    LivroRepository repository;

    @GetMapping("/livro")
    public List<Livro> getAllLivros() {
        return repository.findAll();
    }

    @GetMapping("/livro/{id}")
    public Livro getLivroById(@PathVariable Long id) {
        return repository.findById(id).get();
    }

    @PostMapping("/livro")
    public Livro saveLivro(@RequestBody Livro livro) {
        return repository.save(livro);
    }

    @DeleteMapping("/livro/{id}")
    public void deleteLivro(@PathVariable Long id) {
        repository.deleteById(id);
    }

}
