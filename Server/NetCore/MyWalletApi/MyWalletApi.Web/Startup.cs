using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using MyWalletApi.Data.MongoDB.Settings;
using MyWalletApi.Data.Interface.Repository;
using MyWalletApi.Data.MongoDB.Repository;
using MyWalletApi.Business.Service.Interface;
using MyWalletApi.Business.Service;
using MyWalletApi.Model.Interface;

namespace MyWalletApi.Web
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        readonly string MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors(options => {
                options.AddPolicy(MyAllowSpecificOrigins,
                builder => {
                    builder.WithOrigins("http://localhost:4200");
                });
            });

            services.Configure<MyWalletDatabaseSettings>(
                Configuration.GetSection(nameof(MyWalletDatabaseSettings)));
            
            services.AddSingleton<IMyWalletDatabaseSettings>(sp => 
                    sp.GetRequiredService<IOptions<MyWalletDatabaseSettings>>().Value);
            
            services.AddSingleton<ITransactionService, TransactionService>();
            services.AddSingleton<ITransactionRepository<ITransaction>, TransactionRepository>();

            services.AddControllers();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            app.UseCors(MyAllowSpecificOrigins);

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
