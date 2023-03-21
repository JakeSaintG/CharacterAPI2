namespace CharacterAPI.Repositories;

public class PlaceholderRepository
{
    static string Placeholder = "Placeholder!";


    public PlaceholderRepository() { }

    public static string GetPlaceholder() 
    { 
        return Placeholder;
    }
}
