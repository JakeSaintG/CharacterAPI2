using CharacterAPI.Interfaces;
using Microsoft.AspNetCore.Mvc;
using CharacterAPI.Repositories;

namespace CharacterAPI.Controllers;

[ApiController]
[Route("[controller]")]
public class PlaceholderController : ControllerBase
{
    
    private readonly ILogger<PlaceholderController> _logger;

    public PlaceholderController(ILogger<PlaceholderController> logger)
    {
        _logger = logger;
    }

    [HttpGet]
    public IPlaceholder Get()
    {
        return new IPlaceholder { Name = PlaceholderRepository.GetPlaceholder() };
    }
}