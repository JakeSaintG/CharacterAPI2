using CharacterAPI.Repositories;
using Xunit;

namespace CharacterAPI.UnitTests;

public class TerminologyDetailsTests
{
    public class GetTeamName : TerminologyDetailsTests 
    {
        public GetTeamName()
        {
                
        }

        [Fact]
        public void ReturnsTeamName()
        {
            // arrange

            // act
            var teamName = PlaceholderRepository.GetTeamName();

            // assert
            Assert.NotNull(teamName);
        }
    }
}