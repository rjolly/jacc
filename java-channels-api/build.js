mkdir("build");
mkdir("build/classes");
mkdir("build/javadoc");

javac("src/main/java", "build/classes");
javadoc("src/main/java", "build/javadoc");

mkdir("dist");
var name = "java-channels-api";
jar("dist/" + name + ".jar", "build/classes");
jar("dist/" + name + "-source.jar", "src/main/java");
jar("dist/" + name + "-javadoc.jar", "build/javadoc");
cp("pom.xml", "dist/" + name + ".pom")

publish("dist")
