using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(MyAngularMVCApp1.Startup))]
namespace MyAngularMVCApp1
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
