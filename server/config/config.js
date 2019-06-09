var env=process.env.NODE_ENV || 'development';
if(env==='development'||env==='test'){
	var config=require('./config.json');
	var envConfig=config[env];
	// provides whether in development or in test mode
	Object.keys(envConfig).forEach((key)=>{
	process.env[key]=envConfig[key];		
})
}
