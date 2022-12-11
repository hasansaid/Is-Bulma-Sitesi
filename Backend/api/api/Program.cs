using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System.Text;

var builder = WebApplication.CreateBuilder(args);


/**
 * 
 * cors kýsmý
 * 
 * 
 * */

builder.Services.AddCors(p => p.AddPolicy("Policy1", builder =>
{
    builder.WithOrigins("*").AllowAnyMethod().AllowAnyHeader();
}));

/**
 * 
 * jwt için konfigurasyon
 * 
 * 
 * */

var key = Encoding.ASCII.GetBytes("StringHerhangiBirSeyYazabilirsiniz..");
builder.Services.AddAuthentication(x =>
{
    x.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    x.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
    x.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
})
.AddJwtBearer(x =>
{
    x.RequireHttpsMetadata = false;
    x.SaveToken = true;
    x.TokenValidationParameters = new TokenValidationParameters
    {
        IssuerSigningKey = new SymmetricSecurityKey(key),
        ValidateLifetime = false,
        ValidateIssuer = false,
        ValidateAudience = false,
        ValidateIssuerSigningKey = false,
    };
});

builder.Services.AddAuthorization(); // jwt için

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();


app.UseSwagger();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwaggerUI();
}

app.UseCors("Policy1");

app.UseHttpsRedirection();

app.UseAuthentication(); //jwt için
app.UseAuthorization();

app.MapControllers();

app.Run();
