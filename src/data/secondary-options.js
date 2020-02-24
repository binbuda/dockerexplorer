export const secondaryOptions = {
    "docker-cli": [
        {
            value: 'docker-app',
            label: 'Docker Application',
            usage: '',
            nb: 'A tool to build and manage Docker Applications.',
        },
        {
            value: 'docker-assemble',
            label: 'Assemble is a high-level build tool',
            usage: '',
            nb: '<span class="docker-enterprise-warn">This command is only available on Docker Enterprise Edition.</span> <br><br><br> <span class="docker-warn">This command is experimental on the Docker client.</span> It should not be used in production environments. To enable experimental features in the Docker CLI, edit the <a href="https://docs.docker.com/engine/reference/commandline/cli/#configuration-files">config.json</a> and set <span class="tag-highlight">experimental</span> to <span class="tag-highlight">enabled</span>. Start building a Docker Application package. If there is a docker-compose.yml file in the current directory it will be copied and used.',
        },
        {
            value: 'docker-attach',
            label: 'Attach local standard input, output, and error streams to a running container',
            usage: 'docker attach [OPTIONS] CONTAINER-NAME',
            nb: 'Use "docker attach" to attach your terminal’s standard input, output, and error (or any combination of the three) to a running container using the container’s ID or name. This allows you to view its ongoing output or to control it interactively, as though the commands were running directly in your terminal. <br><br> <span class="board__option-title">Options</span> <table><thead> <tr> <td>Name, shorthand</td> <td>Default</td> <td>Description</td> </tr></thead><tbody> <tr> <td><code class="highlighter-rouge">--detach-keys</code></td> <td></td> <td>Override the key sequence for detaching a container</td> </tr> <tr> <td><code class="highlighter-rouge">--no-stdin</code></td> <td></td> <td>Do not attach STDIN</td> </tr> <tr> <td><code class="highlighter-rouge">--sig-proxy</code></td> <td><code class="highlighter-rouge">true</code></td> <td>Proxy all received signals to the process</td> </tr></tbody></table>'
        },
        {
            value: 'docker-build',
            label: 'Build an image from a Dockerfile',
            usage: 'docker build [OPTIONS] PATH | URL | -',
            nb: 'The docker build command builds Docker images from a Dockerfile and a “context”. A build’s context is the set of files located in the specified PATH or URL. The build process can refer to any of the files in the context. For example, your build can use a COPY instruction to reference a file in the context. The URL parameter can refer to three kinds of resources: Git repositories, pre-packaged tarball contexts and plain text files. <br><br> <span class="board__option-title">Options</span> <table><thead> <tr> <td>Name, shorthand</td> <td>Default</td> <td>Description</td> </tr></thead><tbody> <tr> <td><code class="highlighter-rouge">--add-host</code></td> <td></td> <td>Add a custom host-to-IP mapping (host:ip)</td> </tr> <tr> <td><code class="highlighter-rouge">--build-arg</code></td> <td></td> <td>Set build-time variables</td> </tr> <tr> <td><code class="highlighter-rouge">--cache-from</code></td> <td></td> <td>Images to consider as cache sources</td> </tr> <tr> <td><code class="highlighter-rouge">--cgroup-parent</code></td> <td></td> <td>Optional parent cgroup for the container</td> </tr> <tr> <td><code class="highlighter-rouge">--compress</code></td> <td></td> <td>Compress the build context using gzip</td> </tr> <tr> <td><code class="highlighter-rouge">--cpu-period</code></td> <td></td> <td>Limit the CPU CFS (Completely Fair Scheduler) period</td> </tr> <tr> <td><code class="highlighter-rouge">--cpu-quota</code></td> <td></td> <td>Limit the CPU CFS (Completely Fair Scheduler) quota</td> </tr> <tr> <td><code class="highlighter-rouge">--cpu-shares , -c</code></td> <td></td> <td>CPU shares (relative weight)</td> </tr> <tr> <td><code class="highlighter-rouge">--cpuset-cpus</code></td> <td></td> <td>CPUs in which to allow execution (0-3, 0,1)</td> </tr> <tr> <td><code class="highlighter-rouge">--cpuset-mems</code></td> <td></td> <td>MEMs in which to allow execution (0-3, 0,1)</td> </tr> <tr> <td><code class="highlighter-rouge">--disable-content-trust</code></td> <td><code class="highlighter-rouge">true</code></td> <td>Skip image verification</td> </tr> <tr> <td><code class="highlighter-rouge">--file , -f</code></td> <td></td> <td>Name of the Dockerfile (Default is ‘PATH/Dockerfile’)</td> </tr> <tr> <td><code class="highlighter-rouge">--force-rm</code></td> <td></td> <td>Always remove intermediate containers</td> </tr> <tr> <td><code class="highlighter-rouge">--iidfile</code></td> <td></td> <td>Write the image ID to the file</td> </tr> <tr> <td><code class="highlighter-rouge">--isolation</code></td> <td></td> <td>Container isolation technology</td> </tr> <tr> <td><code class="highlighter-rouge">--label</code></td> <td></td> <td>Set metadata for an image</td> </tr> <tr> <td><code class="highlighter-rouge">--memory , -m</code></td> <td></td> <td>Memory limit</td> </tr> <tr> <td><code class="highlighter-rouge">--memory-swap</code></td> <td></td> <td>Swap limit equal to memory plus swap: ‘-1’ to enable unlimited swap</td> </tr> <tr> <td><code class="highlighter-rouge">--network</code></td> <td></td> <td><a href="https://docs.docker.com/engine/api/v1.25/" target="_blank" class="_"><span class="badge badge-info" data-toggle="tooltip" ttitle="Open the API reference (in a new window)" data-original-title="" title="">API 1.25+</span></a><br>Set the networking mode for the RUN instructions during build</td> </tr> <tr> <td><code class="highlighter-rouge">--no-cache</code></td> <td></td> <td>Do not use cache when building the image</td> </tr> <tr> <td><code class="highlighter-rouge">--output , -o</code></td> <td></td> <td><a href="https://docs.docker.com/engine/api/v1.40/" target="_blank" class="_"><span class="badge badge-info" data-toggle="tooltip" ttitle="Open the API reference (in a new window)" data-original-title="" title="">API 1.40+</span></a><br>Output destination (format: type=local,dest=path)</td> </tr> <tr> <td><code class="highlighter-rouge">--platform</code></td> <td></td> <td><a href="https://docs.docker.com/engine/reference/commandline/dockerd/#daemon-configuration-file" target="_blank" class="_"><span class="badge badge-warning" data-toggle="tooltip" title="" data-original-title="Read about experimental daemon options (in a new window).">experimental (daemon)</span></a><a href="https://docs.docker.com/engine/api/v1.32/" target="_blank" class="_"><span class="badge badge-info" data-toggle="tooltip" ttitle="Open the API reference (in a new window)" data-original-title="" title="">API 1.32+</span></a><br>Set platform if server is multi-platform capable</td> </tr> <tr> <td><code class="highlighter-rouge">--progress</code></td> <td><code class="highlighter-rouge">auto</code></td> <td>Set type of progress output (auto, plain, tty). Use plain to show container output</td> </tr> <tr> <td><code class="highlighter-rouge">--pull</code></td> <td></td> <td>Always attempt to pull a newer version of the image</td> </tr> <tr> <td><code class="highlighter-rouge">--quiet , -q</code></td> <td></td> <td>Suppress the build output and print image ID on success</td> </tr> <tr> <td><code class="highlighter-rouge">--rm</code></td> <td><code class="highlighter-rouge">true</code></td> <td>Remove intermediate containers after a successful build</td> </tr> <tr> <td><code class="highlighter-rouge">--secret</code></td> <td></td> <td><a href="https://docs.docker.com/engine/api/v1.39/" target="_blank" class="_"><span class="badge badge-info" data-toggle="tooltip" ttitle="Open the API reference (in a new window)" data-original-title="" title="">API 1.39+</span></a><br>Secret file to expose to the build (only if BuildKit enabled): id=mysecret,src=/local/secret</td> </tr> <tr> <td><code class="highlighter-rouge">--security-opt</code></td> <td></td> <td>Security options</td> </tr> <tr> <td><code class="highlighter-rouge">--shm-size</code></td> <td></td> <td>Size of /dev/shm</td> </tr> <tr> <td><code class="highlighter-rouge">--squash</code></td> <td></td> <td><a href="https://docs.docker.com/engine/reference/commandline/dockerd/#daemon-configuration-file" target="_blank" class="_"><span class="badge badge-warning" data-toggle="tooltip" title="" data-original-title="Read about experimental daemon options (in a new window).">experimental (daemon)</span></a><a href="https://docs.docker.com/engine/api/v1.25/" target="_blank" class="_"><span class="badge badge-info" data-toggle="tooltip" ttitle="Open the API reference (in a new window)" data-original-title="" title="">API 1.25+</span></a><br>Squash newly built layers into a single new layer</td> </tr> <tr> <td><code class="highlighter-rouge">--ssh</code></td> <td></td> <td><a href="https://docs.docker.com/engine/api/v1.39/" target="_blank" class="_"><span class="badge badge-info" data-toggle="tooltip" ttitle="Open the API reference (in a new window)" data-original-title="" title="">API 1.39+</span></a><br>SSH agent socket or keys to expose to the build (only if BuildKit enabled) (format: default|<id>[=<socket>|<key>[,<key>]])</key></key></socket></id></td> </tr> <tr> <td><code class="highlighter-rouge">--stream</code></td> <td></td> <td><a href="https://docs.docker.com/engine/reference/commandline/dockerd/#daemon-configuration-file" target="_blank" class="_"><span class="badge badge-warning" data-toggle="tooltip" title="" data-original-title="Read about experimental daemon options (in a new window).">experimental (daemon)</span></a><a href="https://docs.docker.com/engine/api/v1.31/" target="_blank" class="_"><span class="badge badge-info" data-toggle="tooltip" ttitle="Open the API reference (in a new window)" data-original-title="" title="">API 1.31+</span></a><br>Stream attaches to server to negotiate build context</td> </tr> <tr> <td><code class="highlighter-rouge">--tag , -t</code></td> <td></td> <td>Name and optionally a tag in the ‘name:tag’ format</td> </tr> <tr> <td><code class="highlighter-rouge">--target</code></td> <td></td> <td>Set the target build stage to build.</td> </tr> <tr> <td><code class="highlighter-rouge">--ulimit</code></td> <td></td> <td>Ulimit options</td> </tr> <!-- end for option --></tbody></table>'
        },
        {
            value: 'docker-builder',
            label: 'Manage builds',
            usage: '',
            nb: '',
        },
        {
            value: 'docker-buildx',
            label: 'Build with BuildKit',
            usage: '',
            nb: '',
        },
        {
            value: 'docker-checkpoint',
            label: 'Docker Checkpoint',
            usage: '',
            nb: '',
        },
        {
            value: 'docker-cluster',
            label: 'Docker Cluster',
            usage: '',
            nb: '',
        },
        {
            value: 'docker-diff',
            label: 'Inspect changes to files or directories on a container’s filesystem',
            usage: 'docker diff CONTAINER',
            nb: 'List the changed files and directories in a container᾿s filesystem since the container was created. Three different types of change are tracked: <br><br> <table> <thead> <tr> <td>Symbol</td> <td>Description</td> </tr> </thead> <tbody> <tr> <td><code class="highlighter-rouge">A</code></td> <td>A file or directory was added</td> </tr> <tr> <td><code class="highlighter-rouge">D</code></td> <td>A file or directory was deleted</td> </tr> <tr> <td><code class="highlighter-rouge">C</code></td> <td>A file or directory was changed</td> </tr> </tbody></table>'
        },
        {
            value: 'docker-commit',
            label: 'Create a new image from a container’s changes',
            usage: 'docker commit [OPTIONS] CONTAINER [REPOSITORY[:TAG]]',
            nb: 'It can be useful to commit a container’s file changes or settings into a new image. This allows you to debug a container by running an interactive shell, or to export a working dataset to another server. Generally, it is better to use Dockerfiles to manage your images in a documented and maintainable way. <br><br> <span class="board__option-title">Options</span> <table><thead> <tr> <td>Name, shorthand</td> <td>Default</td> <td>Description</td> </tr></thead><tbody> <tr> <td><code class="highlighter-rouge">--author , -a</code></td> <td></td> <td>Author (e.g., “John Hannibal Smith <a href="mailto:hannibal@a-team.com">hannibal@a-team.com</a>”)</td> </tr> <tr> <td><code class="highlighter-rouge">--change , -c</code></td> <td></td> <td>Apply Dockerfile instruction to the created image</td> </tr> <tr> <td><code class="highlighter-rouge">--message , -m</code></td> <td></td> <td>Commit message</td> </tr> <tr> <td><code class="highlighter-rouge">--pause , -p</code></td> <td><code class="highlighter-rouge">true</code></td> <td>Pause container during commit</td> </tr> <!-- end for option --></tbody></table>'
        },

        {
            value: 'docker-config',
            label: 'Manage Docker configs',
            usage: '',
            nb: '',
        },
        {
            value: 'docker-containers',
            label: 'Manage containers',
            usage: '',
            nb: '',
        },
        {
            value: 'docker-context',
            label: 'Manage contexts',
            usage: '',
            nb: '',
        },
        {
            value: 'docker-events',
            label: 'Get real time events from the server',
            usage: 'docker events [OPTIONS]',
            nb: 'Use docker events to get real-time events from the server. These events differ per Docker object type. Different event types have different scopes. Local scoped events are only seen on the node they take place on, and swarm scoped events are seen on all managers. <br><br> <span class="board__option-title">Options</span> <table><thead> <tr> <td>Name, shorthand</td> <td>Default</td> <td>Description</td> </tr></thead><tbody> <tr> <td><code class="highlighter-rouge">--filter , -f</code></td> <td></td> <td>Filter output based on conditions provided</td> </tr> <tr> <td><code class="highlighter-rouge">--format</code></td> <td></td> <td>Format the output using the given Go template</td> </tr> <tr> <td><code class="highlighter-rouge">--since</code></td> <td></td> <td>Show all events created since timestamp</td> </tr> <tr> <td><code class="highlighter-rouge">--until</code></td> <td></td> <td>Stream events until this timestamp</td> </tr> <!-- end for option --></tbody></table>'
        },
        {
            value: 'docker-exec',
            label: 'Run a command in a running container',
            usage: 'docker exec [OPTIONS] CONTAINER COMMAND [ARG...]',
            nb: 'The docker exec command runs a new command in a running container.The command started using docker exec only runs while the container’s primary process (PID 1) is running, and it is not restarted if the container is restarted.COMMAND will run in the default directory of the container. If the underlying image has a custom directory specified with the WORKDIR directive in its Dockerfile, this will be used instead.COMMAND should be an executable, a chained or a quoted command will not work. <br><br> <span class="board__option-title">Options</span> <table><thead> <tr> <td>Name, shorthand</td> <td>Default</td> <td>Description</td> </tr></thead><tbody> <tr> <td><code class="highlighter-rouge">--detach , -d</code></td> <td></td> <td>Detached mode: run command in the background</td> </tr> <tr> <td><code class="highlighter-rouge">--detach-keys</code></td> <td></td> <td>Override the key sequence for detaching a container</td> </tr> <tr> <td><code class="highlighter-rouge">--env , -e</code></td> <td></td> <td><a href="https://docs.docker.com/engine/api/v1.25/" target="_blank" class="_"><span class="badge badge-info" data-toggle="tooltip" ttitle="Open the API reference (in a new window)" data-original-title="" title="">API 1.25+</span></a><br>Set environment variables</td> </tr> <tr> <td><code class="highlighter-rouge">--interactive , -i</code></td> <td></td> <td>Keep STDIN open even if not attached</td> </tr> <tr> <td><code class="highlighter-rouge">--privileged</code></td> <td></td> <td>Give extended privileges to the command</td> </tr> <tr> <td><code class="highlighter-rouge">--tty , -t</code></td> <td></td> <td>Allocate a pseudo-TTY</td> </tr> <tr> <td><code class="highlighter-rouge">--user , -u</code></td> <td></td> <td>Username or UID (format: &lt;name|uid&gt;[:&lt;group|gid&gt;])</td> </tr> <tr> <td><code class="highlighter-rouge">--workdir , -w</code></td> <td></td> <td><a href="https://docs.docker.com/engine/api/v1.35/" target="_blank" class="_"><span class="badge badge-info" data-toggle="tooltip" ttitle="Open the API reference (in a new window)" data-original-title="" title="">API 1.35+</span></a><br>Working directory inside the container</td> </tr> <!-- end for option --></tbody></table>'
        },
        {
            value: 'docker-export',
            label: 'Export a container’s filesystem as a tar archive',
            usage: 'docker export [OPTIONS] CONTAINER',
            nb: 'The docker export command does not export the contents of volumes associated with the container. If a volume is mounted on top of an existing directory in the container, docker export will export the contents of the underlying directory, not the contents of the volume. <br><br> <span class="board__option-title">Options</span> <table><thead> <tr> <td>Name, shorthand</td> <td>Default</td> <td>Description</td> </tr></thead><tbody> <tr> <td><code class="highlighter-rouge">--output , -o</code></td> <td></td> <td>Write to a file, instead of STDOUT</td> </tr> <!-- end for option --></tbody></table>'
        },
        {
            value: 'docker-cp',
            label: 'Copy files/folders between a container and the local filesystem',
            usage: 'docker cp [OPTIONS] CONTAINER:SRC_PATH DEST_PATH| \n docker cp [OPTIONS] SRC_PATH|- CONTAINER:DEST_PATH',
            nb: 'The docker cp utility copies the contents of SRC_PATH to the DEST_PATH. You can copy from the container’s file system to the local machine or the reverse, from the local filesystem to the container. If - is specified for either the SRC_PATH or DEST_PATH, you can also stream a tar archive from STDIN or to STDOUT. The CONTAINER can be a running or stopped container. The SRC_PATH or DEST_PATH can be a file or directory. <br><br> <span class="board__option-title">Options</span> <table><thead> <tr> <td>Name, shorthand</td> <td>Default</td> <td>Description</td> </tr></thead><tbody> <tr> <td><code class="highlighter-rouge">--archive , -a</code></td> <td></td> <td>Archive mode (copy all uid/gid information)</td> </tr> <tr> <td><code class="highlighter-rouge">--follow-link , -L</code></td> <td></td> <td>Always follow symbol link in SRC_PATH</td> </tr> <!-- end for option --></tbody></table>'
        },
        {
            value: 'docker-history',
            label: 'Show the history of an image',
            usage: 'docker history [OPTIONS] IMAGE',
            nb: '<span class="board__option-title">Options</span> <table><thead> <tr> <td>Name, shorthand</td> <td>Default</td> <td>Description</td> </tr></thead><tbody> <tr> <td><code class="highlighter-rouge">--format</code></td> <td></td> <td>Pretty-print images using a Go template</td> </tr> <tr> <td><code class="highlighter-rouge">--human , -H</code></td> <td><code class="highlighter-rouge">true</code></td> <td>Print sizes and dates in human readable format</td> </tr> <tr> <td><code class="highlighter-rouge">--no-trunc</code></td> <td></td> <td>Don’t truncate output</td> </tr> <tr> <td><code class="highlighter-rouge">--quiet , -q</code></td> <td></td> <td>Only show numeric IDs</td> </tr> <!-- end for option --></tbody></table>'
        },

        {
            value: 'docker-image',
            label: 'Manage images',
            usage: '',
            nb: '',
        },

        {
            value: 'docker-create',
            label: 'Create a new container',
            usage: 'docker create [OPTIONS] IMAGE [COMMAND] [ARG...]',
            nb: 'The docker create command creates a writeable container layer over the specified image and prepares it for running the specified command. The container ID is then printed to STDOUT. This is similar to docker run -d except the container is never started. You can then use the docker start "container_id" command to start the container at any point. <br><br> <span class="board__option-title">Options</span> <table><thead> <tr> <td>Name, shorthand</td> <td>Default</td> <td>Description</td> </tr></thead><tbody> <tr> <td><code class="highlighter-rouge">--add-host</code></td> <td></td> <td>Add a custom host-to-IP mapping (host:ip)</td> </tr> <tr> <td><code class="highlighter-rouge">--attach , -a</code></td> <td></td> <td>Attach to STDIN, STDOUT or STDERR</td> </tr> <tr> <td><code class="highlighter-rouge">--blkio-weight</code></td> <td></td> <td>Block IO (relative weight), between 10 and 1000, or 0 to disable (default 0)</td> </tr> <tr> <td><code class="highlighter-rouge">--blkio-weight-device</code></td> <td></td> <td>Block IO weight (relative device weight)</td> </tr> <tr> <td><code class="highlighter-rouge">--cap-add</code></td> <td></td> <td>Add Linux capabilities</td> </tr> <tr> <td><code class="highlighter-rouge">--cap-drop</code></td> <td></td> <td>Drop Linux capabilities</td> </tr> <tr> <td><code class="highlighter-rouge">--cgroup-parent</code></td> <td></td> <td>Optional parent cgroup for the container</td> </tr> <tr> <td><code class="highlighter-rouge">--cidfile</code></td> <td></td> <td>Write the container ID to the file</td> </tr> <tr> <td><code class="highlighter-rouge">--cpu-count</code></td> <td></td> <td>CPU count (Windows only)</td> </tr> <tr> <td><code class="highlighter-rouge">--cpu-percent</code></td> <td></td> <td>CPU percent (Windows only)</td> </tr> <tr> <td><code class="highlighter-rouge">--cpu-period</code></td> <td></td> <td>Limit CPU CFS (Completely Fair Scheduler) period</td> </tr> <tr> <td><code class="highlighter-rouge">--cpu-quota</code></td> <td></td> <td>Limit CPU CFS (Completely Fair Scheduler) quota</td> </tr> <tr> <td><code class="highlighter-rouge">--cpu-rt-period</code></td> <td></td> <td><a href="https://docs.docker.com/engine/api/v1.25/" target="_blank" class="_"><span class="badge badge-info" data-toggle="tooltip" ttitle="Open the API reference (in a new window)" data-original-title="" title="">API 1.25+</span></a><br>Limit CPU real-time period in microseconds</td> </tr> <tr> <td><code class="highlighter-rouge">--cpu-rt-runtime</code></td> <td></td> <td><a href="https://docs.docker.com/engine/api/v1.25/" target="_blank" class="_"><span class="badge badge-info" data-toggle="tooltip" ttitle="Open the API reference (in a new window)" data-original-title="" title="">API 1.25+</span></a><br>Limit CPU real-time runtime in microseconds</td> </tr> <tr> <td><code class="highlighter-rouge">--cpu-shares , -c</code></td> <td></td> <td>CPU shares (relative weight)</td> </tr> <tr> <td><code class="highlighter-rouge">--cpus</code></td> <td></td> <td><a href="https://docs.docker.com/engine/api/v1.25/" target="_blank" class="_"><span class="badge badge-info" data-toggle="tooltip" ttitle="Open the API reference (in a new window)" data-original-title="" title="">API 1.25+</span></a><br>Number of CPUs</td> </tr> <tr> <td><code class="highlighter-rouge">--cpuset-cpus</code></td> <td></td> <td>CPUs in which to allow execution (0-3, 0,1)</td> </tr> <tr> <td><code class="highlighter-rouge">--cpuset-mems</code></td> <td></td> <td>MEMs in which to allow execution (0-3, 0,1)</td> </tr> <tr> <td><code class="highlighter-rouge">--device</code></td> <td></td> <td>Add a host device to the container</td> </tr> <tr> <td><code class="highlighter-rouge">--device-cgroup-rule</code></td> <td></td> <td>Add a rule to the cgroup allowed devices list</td> </tr> <tr> <td><code class="highlighter-rouge">--device-read-bps</code></td> <td></td> <td>Limit read rate (bytes per second) from a device</td> </tr> <tr> <td><code class="highlighter-rouge">--device-read-iops</code></td> <td></td> <td>Limit read rate (IO per second) from a device</td> </tr> <tr> <td><code class="highlighter-rouge">--device-write-bps</code></td> <td></td> <td>Limit write rate (bytes per second) to a device</td> </tr> <tr> <td><code class="highlighter-rouge">--device-write-iops</code></td> <td></td> <td>Limit write rate (IO per second) to a device</td> </tr> <tr> <td><code class="highlighter-rouge">--disable-content-trust</code></td> <td><code class="highlighter-rouge">true</code></td> <td>Skip image verification</td> </tr> <tr> <td><code class="highlighter-rouge">--dns</code></td> <td></td> <td>Set custom DNS servers</td> </tr> <tr> <td><code class="highlighter-rouge">--dns-opt</code></td> <td></td> <td>Set DNS options</td> </tr> <tr> <td><code class="highlighter-rouge">--dns-option</code></td> <td></td> <td>Set DNS options</td> </tr> <tr> <td><code class="highlighter-rouge">--dns-search</code></td> <td></td> <td>Set custom DNS search domains</td> </tr> <tr> <td><code class="highlighter-rouge">--domainname</code></td> <td></td> <td>Container NIS domain name</td> </tr> <tr> <td><code class="highlighter-rouge">--entrypoint</code></td> <td></td> <td>Overwrite the default ENTRYPOINT of the image</td> </tr> <tr> <td><code class="highlighter-rouge">--env , -e</code></td> <td></td> <td>Set environment variables</td> </tr> <tr> <td><code class="highlighter-rouge">--env-file</code></td> <td></td> <td>Read in a file of environment variables</td> </tr> <tr> <td><code class="highlighter-rouge">--expose</code></td> <td></td> <td>Expose a port or a range of ports</td> </tr> <tr> <td><code class="highlighter-rouge">--gpus</code></td> <td></td> <td><a href="https://docs.docker.com/engine/api/v1.40/" target="_blank" class="_"><span class="badge badge-info" data-toggle="tooltip" ttitle="Open the API reference (in a new window)" data-original-title="" title="">API 1.40+</span></a><br>GPU devices to add to the container (‘all’ to pass all GPUs)</td> </tr> <tr> <td><code class="highlighter-rouge">--group-add</code></td> <td></td> <td>Add additional groups to join</td> </tr> <tr> <td><code class="highlighter-rouge">--health-cmd</code></td> <td></td> <td>Command to run to check health</td> </tr> <tr> <td><code class="highlighter-rouge">--health-interval</code></td> <td></td> <td>Time between running the check (ms|s|m|h) (default 0s)</td> </tr> <tr> <td><code class="highlighter-rouge">--health-retries</code></td> <td></td> <td>Consecutive failures needed to report unhealthy</td> </tr> <tr> <td><code class="highlighter-rouge">--health-start-period</code></td> <td></td> <td><a href="https://docs.docker.com/engine/api/v1.29/" target="_blank" class="_"><span class="badge badge-info" data-toggle="tooltip" ttitle="Open the API reference (in a new window)" data-original-title="" title="">API 1.29+</span></a><br>Start period for the container to initialize before starting health-retries countdown (ms|s|m|h) (default 0s)</td> </tr> <tr> <td><code class="highlighter-rouge">--health-timeout</code></td> <td></td> <td>Maximum time to allow one check to run (ms|s|m|h) (default 0s)</td> </tr> <tr> <td><code class="highlighter-rouge">--help</code></td> <td></td> <td>Print usage</td> </tr> <tr> <td><code class="highlighter-rouge">--hostname , -h</code></td> <td></td> <td>Container host name</td> </tr> <tr> <td><code class="highlighter-rouge">--init</code></td> <td></td> <td><a href="https://docs.docker.com/engine/api/v1.25/" target="_blank" class="_"><span class="badge badge-info" data-toggle="tooltip" ttitle="Open the API reference (in a new window)" data-original-title="" title="">API 1.25+</span></a><br>Run an init inside the container that forwards signals and reaps processes</td> </tr> <tr> <td><code class="highlighter-rouge">--interactive , -i</code></td> <td></td> <td>Keep STDIN open even if not attached</td> </tr> <tr> <td><code class="highlighter-rouge">--io-maxbandwidth</code></td> <td></td> <td>Maximum IO bandwidth limit for the system drive (Windows only)</td> </tr> <tr> <td><code class="highlighter-rouge">--io-maxiops</code></td> <td></td> <td>Maximum IOps limit for the system drive (Windows only)</td> </tr> <tr> <td><code class="highlighter-rouge">--ip</code></td> <td></td> <td>IPv4 address (e.g., 172.30.100.104)</td> </tr> <tr> <td><code class="highlighter-rouge">--ip6</code></td> <td></td> <td>IPv6 address (e.g., 2001:db8::33)</td> </tr> <tr> <td><code class="highlighter-rouge">--ipc</code></td> <td></td> <td>IPC mode to use</td> </tr> <tr> <td><code class="highlighter-rouge">--isolation</code></td> <td></td> <td>Container isolation technology</td> </tr> <tr> <td><code class="highlighter-rouge">--kernel-memory</code></td> <td></td> <td>Kernel memory limit</td> </tr> <tr> <td><code class="highlighter-rouge">--label , -l</code></td> <td></td> <td>Set meta data on a container</td> </tr> <tr> <td><code class="highlighter-rouge">--label-file</code></td> <td></td> <td>Read in a line delimited file of labels</td> </tr> <tr> <td><code class="highlighter-rouge">--link</code></td> <td></td> <td>Add link to another container</td> </tr> <tr> <td><code class="highlighter-rouge">--link-local-ip</code></td> <td></td> <td>Container IPv4/IPv6 link-local addresses</td> </tr> <tr> <td><code class="highlighter-rouge">--log-driver</code></td> <td></td> <td>Logging driver for the container</td> </tr> <tr> <td><code class="highlighter-rouge">--log-opt</code></td> <td></td> <td>Log driver options</td> </tr> <tr> <td><code class="highlighter-rouge">--mac-address</code></td> <td></td> <td>Container MAC address (e.g., 92:d0:c6:0a:29:33)</td> </tr> <tr> <td><code class="highlighter-rouge">--memory , -m</code></td> <td></td> <td>Memory limit</td> </tr> <tr> <td><code class="highlighter-rouge">--memory-reservation</code></td> <td></td> <td>Memory soft limit</td> </tr> <tr> <td><code class="highlighter-rouge">--memory-swap</code></td> <td></td> <td>Swap limit equal to memory plus swap: ‘-1’ to enable unlimited swap</td> </tr> <tr> <td><code class="highlighter-rouge">--memory-swappiness</code></td> <td><code class="highlighter-rouge">-1</code></td> <td>Tune container memory swappiness (0 to 100)</td> </tr> <tr> <td><code class="highlighter-rouge">--mount</code></td> <td></td> <td>Attach a filesystem mount to the container</td> </tr> <tr> <td><code class="highlighter-rouge">--name</code></td> <td></td> <td>Assign a name to the container</td> </tr> <tr> <td><code class="highlighter-rouge">--net</code></td> <td></td> <td>Connect a container to a network</td> </tr> <tr> <td><code class="highlighter-rouge">--net-alias</code></td> <td></td> <td>Add network-scoped alias for the container</td> </tr> <tr> <td><code class="highlighter-rouge">--network</code></td> <td></td> <td>Connect a container to a network</td> </tr> <tr> <td><code class="highlighter-rouge">--network-alias</code></td> <td></td> <td>Add network-scoped alias for the container</td> </tr> <tr> <td><code class="highlighter-rouge">--no-healthcheck</code></td> <td></td> <td>Disable any container-specified HEALTHCHECK</td> </tr> <tr> <td><code class="highlighter-rouge">--oom-kill-disable</code></td> <td></td> <td>Disable OOM Killer</td> </tr> <tr> <td><code class="highlighter-rouge">--oom-score-adj</code></td> <td></td> <td>Tune host’s OOM preferences (-1000 to 1000)</td> </tr> <tr> <td><code class="highlighter-rouge">--pid</code></td> <td></td> <td>PID namespace to use</td> </tr> <tr> <td><code class="highlighter-rouge">--pids-limit</code></td> <td></td> <td>Tune container pids limit (set -1 for unlimited)</td> </tr> <tr> <td><code class="highlighter-rouge">--platform</code></td> <td></td> <td><a href="https://docs.docker.com/engine/reference/commandline/dockerd/#daemon-configuration-file" target="_blank" class="_"><span class="badge badge-warning" data-toggle="tooltip" title="" data-original-title="Read about experimental daemon options (in a new window).">experimental (daemon)</span></a><a href="https://docs.docker.com/engine/api/v1.32/" target="_blank" class="_"><span class="badge badge-info" data-toggle="tooltip" ttitle="Open the API reference (in a new window)" data-original-title="" title="">API 1.32+</span></a><br>Set platform if server is multi-platform capable</td> </tr> <tr> <td><code class="highlighter-rouge">--privileged</code></td> <td></td> <td>Give extended privileges to this container</td> </tr> <tr> <td><code class="highlighter-rouge">--publish , -p</code></td> <td></td> <td>Publish a container’s port(s) to the host</td> </tr> <tr> <td><code class="highlighter-rouge">--publish-all , -P</code></td> <td></td> <td>Publish all exposed ports to random ports</td> </tr> <tr> <td><code class="highlighter-rouge">--read-only</code></td> <td></td> <td>Mount the container’s root filesystem as read only</td> </tr> <tr> <td><code class="highlighter-rouge">--restart</code></td> <td><code class="highlighter-rouge">no</code></td> <td>Restart policy to apply when a container exits</td> </tr> <tr> <td><code class="highlighter-rouge">--rm</code></td> <td></td> <td>Automatically remove the container when it exits</td> </tr> <tr> <td><code class="highlighter-rouge">--runtime</code></td> <td></td> <td>Runtime to use for this container</td> </tr> <tr> <td><code class="highlighter-rouge">--security-opt</code></td> <td></td> <td>Security Options</td> </tr> <tr> <td><code class="highlighter-rouge">--shm-size</code></td> <td></td> <td>Size of /dev/shm</td> </tr> <tr> <td><code class="highlighter-rouge">--stop-signal</code></td> <td><code class="highlighter-rouge">SIGTERM</code></td> <td>Signal to stop a container</td> </tr> <tr> <td><code class="highlighter-rouge">--stop-timeout</code></td> <td></td> <td><a href="https://docs.docker.com/engine/api/v1.25/" target="_blank" class="_"><span class="badge badge-info" data-toggle="tooltip" ttitle="Open the API reference (in a new window)" data-original-title="" title="">API 1.25+</span></a><br>Timeout (in seconds) to stop a container</td> </tr> <tr> <td><code class="highlighter-rouge">--storage-opt</code></td> <td></td> <td>Storage driver options for the container</td> </tr> <tr> <td><code class="highlighter-rouge">--sysctl</code></td> <td></td> <td>Sysctl options</td> </tr> <tr> <td><code class="highlighter-rouge">--tmpfs</code></td> <td></td> <td>Mount a tmpfs directory</td> </tr> <tr> <td><code class="highlighter-rouge">--tty , -t</code></td> <td></td> <td>Allocate a pseudo-TTY</td> </tr> <tr> <td><code class="highlighter-rouge">--ulimit</code></td> <td></td> <td>Ulimit options</td> </tr> <tr> <td><code class="highlighter-rouge">--user , -u</code></td> <td></td> <td>Username or UID (format: &lt;name|uid&gt;[:&lt;group|gid&gt;])</td> </tr> <tr> <td><code class="highlighter-rouge">--userns</code></td> <td></td> <td>User namespace to use</td> </tr> <tr> <td><code class="highlighter-rouge">--uts</code></td> <td></td> <td>UTS namespace to use</td> </tr> <tr> <td><code class="highlighter-rouge">--volume , -v</code></td> <td></td> <td>Bind mount a volume</td> </tr> <tr> <td><code class="highlighter-rouge">--volume-driver</code></td> <td></td> <td>Optional volume driver for the container</td> </tr> <tr> <td><code class="highlighter-rouge">--volumes-from</code></td> <td></td> <td>Mount volumes from the specified container(s)</td> </tr> <tr> <td><code class="highlighter-rouge">--workdir , -w</code></td> <td></td> <td>Working directory inside the container</td> </tr> <!-- end for option --></tbody></table>'
        },
        {
            value: 'docker-deploy',
            label: 'Deploy a new stack or update an existing stack',
            usage: 'docker deploy [OPTIONS] STACK',
            nb: 'Create and update a stack from a compose or a dab file on the swarm. This command has to be run targeting a manager node. <br><br> <span class="board__option-title">Options</span> <table><thead><tr><td>Name, shorthand</td><td>Default</td><td>Description</td></tr></thead><tbody><tr><td><code class="highlighter-rouge">--bundle-file</code></td><td></td><td><span class="badge badge-warning">experimental</span>&nbsp;<br>Path to a Distributed Application Bundle file</td></tr><tr><td><code class="highlighter-rouge">--compose-file , -c</code></td><td></td><td><span class="badge badge-info">API 1.25+</span>&nbsp;<br>Path to a Compose file</td></tr><tr><td><code class="highlighter-rouge">--prune</code></td><td></td><td><span class="badge badge-info">API 1.27+</span>&nbsp;<br>Prune services that are no longer referenced</td></tr><tr><td><code class="highlighter-rouge">--resolve-image</code></td><td><code class="highlighter-rouge">always</code></td><td><span class="badge badge-info">API 1.30+</span>&nbsp;<br>Query the registry to resolve image digest and supported platforms (“always”|”changed”|”never”)</td></tr><tr><td><code class="highlighter-rouge">--with-registry-auth</code></td><td></td><td>Send registry authentication details to Swarm agents</td></tr></tbody></table>'
        },
        {
            value: 'ddocker-images',
            label: 'List images',
            usage: 'docker images [OPTIONS] [REPOSITORY[:TAG]]',
            nb: 'The default docker images will show all top level images, their repository and tags, and their size.Docker images have intermediate layers that increase reusability, decrease disk usage, and speed up docker build by allowing each step to be cached. These intermediate layers are not shown by default.The SIZE is the cumulative space taken up by the image and all its parent images. This is also the disk space used by the contents of the Tar file created when you docker save an image. <br><br> <span class="board__option-title">Options</span> <table><thead><tr><td>Name, shorthand</td><td>Default</td><td>Description</td></tr></thead><tbody><tr><td><code class="highlighter-rouge">--all , -a</code></td><td></td><td>Show all images (default hides intermediate images)</td></tr><tr><td><code class="highlighter-rouge">--digests</code></td><td></td><td>Show digests</td></tr><tr><td><code class="highlighter-rouge">--filter , -f</code></td><td></td><td>Filter output based on conditions provided</td></tr><tr><td><code class="highlighter-rouge">--format</code></td><td></td><td>Pretty-print images using a Go template</td></tr><tr><td><code class="highlighter-rouge">--no-trunc</code></td><td></td><td>Don’t truncate output</td></tr><tr><td><code class="highlighter-rouge">--quiet , -q</code></td><td></td><td>Only show numeric IDs</td></tr></tbody></table>'
        },
        {
            value: 'docker-import',
            label: 'Import the contents from a tarball to create a filesystem image',
            usage: 'docker import [OPTIONS] file|URL|- [REPOSITORY[:TAG]]',
            nb: 'You can specify a URL or - (dash) to take data directly from STDIN. The URL can point to an archive (.tar, .tar.gz, .tgz, .bzip, .tar.xz, or .txz) containing a filesystem or to an individual file on the Docker host. If you specify an archive, Docker untars it in the container relative to the / (root). If you specify an individual file, you must specify the full path within the host. To import from a remote location, specify a URI that begins with the http:// or https:// protocol. <br><br> <span class="board__option-title">Options</span> <table><thead><tr><td>Name, shorthand</td><td>Default</td><td>Description</td></tr></thead><tbody><tr><td><code class="highlighter-rouge">--change , -c</code></td><td></td><td>Apply Dockerfile instruction to the created image</td></tr><tr><td><code class="highlighter-rouge">--message , -m</code></td><td></td><td>Set commit message for imported image</td></tr></tbody></table>'
        },
        {
            value: 'docker-info',
            label: 'Display system-wide information',
            usage: 'docker info [OPTIONS]',
            nb: 'This command displays system wide information regarding the Docker installation. Information displayed includes the kernel version, number of containers and images. The number of images shown is the number of unique images. The same image tagged under different names is counted only once. <br><br> <span class="board__option-title">Options</span> <table><thead><tr><td>Name, shorthand</td><td>Default</td><td>Description</td></tr></thead><tbody><tr><td><code class="highlighter-rouge">--format , -f</code></td><td></td><td>Format the output using the given Go template</td></tr></tbody></table>'
        },
        {
            value: 'docker-inspect',
            label: 'Return low-level information on Docker objects',
            usage: 'docker inspect [OPTIONS] NAME|ID [NAME|ID...]',
            nb: 'Docker inspect provides detailed information on constructs controlled by Docker. By default, docker inspect will render results in a JSON array. <br><br> <span class="board__option-title">Options</span> <table><thead><tr><td>Name, shorthand</td><td>Default</td><td>Description</td></tr></thead><tbody><tr><td><code class="highlighter-rouge">--format , -f</code></td><td></td><td>Format the output using the given Go template</td></tr><tr><td><code class="highlighter-rouge">--size , -s</code></td><td></td><td>Display total file sizes if the type is container</td></tr><tr><td><code class="highlighter-rouge">--type</code></td><td></td><td>Return JSON for specified type</td></tr></tbody></table>'
        },
        {
            value: 'docker-kill',
            label: 'Kill one or more running containers',
            usage: 'docker kill [OPTIONS] CONTAINER [CONTAINER...]',
            nb: 'The main process inside the container will be sent SIGKILL, or any signal specified with option --signal. <br><br> <span class="board__option-title">Options</span> <table><thead><tr><td>Name, shorthand</td><td>Default</td><td>Description</td></tr></thead><tbody><tr><td><code class="highlighter-rouge">--signal , -s</code></td><td><code class="highlighter-rouge">KILL</code></td><td>Signal to send to the container</td></tr></tbody></table>'
        },
        {
            value: 'docker-load',
            label: 'Load an image from a tar archive or STDIN',
            usage: 'docker load [OPTIONS]',
            nb: 'Load an image or repository from a tar archive (even if compressed with gzip, bzip2, or xz) from a file or STDIN. It restores both images and tags. <br><br> <span class="board__option-title">Options</span> <table><thead> <tr> <td>Name, shorthand</td> <td>Default</td> <td>Description</td> </tr></thead><tbody> <tr> <td><code class="highlighter-rouge">--input , -i</code></td> <td></td> <td>Read from tar archive file, instead of STDIN</td> </tr> <tr> <td><code class="highlighter-rouge">--quiet , -q</code></td> <td></td> <td>Suppress the load output</td> </tr> <!-- end for option --></tbody></table>'
        },
        {
            value: 'docker-login',
            label: 'Log in to a Docker registry',
            usage: 'docker login [OPTIONS] [SERVER]',
            nb: '<span class="board__option-title">Options</span> <table><thead> <tr> <td>Name, shorthand</td> <td>Default</td> <td>Description</td> </tr></thead><tbody> <tr> <td><code class="highlighter-rouge">--password , -p</code></td> <td></td> <td>Password</td> </tr> <tr> <td><code class="highlighter-rouge">--password-stdin</code></td> <td></td> <td>Take the password from stdin</td> </tr> <tr> <td><code class="highlighter-rouge">--username , -u</code></td> <td></td> <td>Username</td> </tr> <!-- end for option --></tbody></table>'
        },
        {
            value: 'docker-logout',
            label: 'Log out from a Docker registry',
            usage: 'docker logout [SERVER]',
            nb: ''
        },
        {
            value: 'docker-logs',
            label: 'Fetch the logs of a container',
            usage: 'docker logs [OPTIONS] CONTAINER',
            nb: 'The docker logs command batch-retrieves logs present at the time of execution. <br><br> <span class="board__option-title">Options</span> <table><thead> <tr> <td>Name, shorthand</td> <td>Default</td> <td>Description</td> </tr></thead><tbody> <tr> <td><code class="highlighter-rouge">--details</code></td> <td></td> <td>Show extra details provided to logs</td> </tr> <tr> <td><code class="highlighter-rouge">--follow , -f</code></td> <td></td> <td>Follow log output</td> </tr> <tr> <td><code class="highlighter-rouge">--since</code></td> <td></td> <td>Show logs since timestamp (e.g. 2013-01-02T13:23:37) or relative (e.g. 42m for 42 minutes)</td> </tr> <tr> <td><code class="highlighter-rouge">--tail</code></td> <td><code class="highlighter-rouge">all</code></td> <td>Number of lines to show from the end of the logs</td> </tr> <tr> <td><code class="highlighter-rouge">--timestamps , -t</code></td> <td></td> <td>Show timestamps</td> </tr> <tr> <td><code class="highlighter-rouge">--until</code></td> <td></td> <td><a href="https://docs.docker.com/engine/api/v1.35/" target="_blank" class="_"><span class="badge badge-info" data-toggle="tooltip" ttitle="Open the API reference (in a new window)" data-original-title="" title="">API 1.35+</span></a><br>Show logs before a timestamp (e.g. 2013-01-02T13:23:37) or relative (e.g. 42m for 42 minutes)</td> </tr> <!-- end for option --></tbody></table>'
        },

        {
            value: 'docker-manifest',
            label: 'Manage Docker image manifests and manifest lists',
            usage: '',
            nb: '',
        },
        {
            value: 'docker-network',
            label: 'Manage networks',
            usage: '',
            nb: '',
        },
        {
            value: 'docker-node',
            label: 'Manage Swarm nodes',
            usage: '',
            nb: '',
        },

        {
            value: 'docker-pause',
            label: 'Pause all processes within one or more containers',
            usage: 'docker pause CONTAINER [CONTAINER...]',
            nb: 'The docker pause command suspends all processes in the specified containers. On Linux, this uses the freezer cgroup. Traditionally, when suspending a process the SIGSTOP signal is used, which is observable by the process being suspended. With the freezer cgroup the process is unaware, and unable to capture, that it is being suspended, and subsequently resumed. On Windows, only Hyper-V containers can be paused.'
        },

        {
            value: 'docker-plugin',
            label: 'Manage plugins',
            usage: '',
            nb: '',
        },

        {
            value: 'docker-port',
            label: 'List port mappings or a specific mapping for the container',
            usage: 'docker port CONTAINER [PRIVATE_PORT[/PROTO]]',
            nb: ''
        },
        {
            value: 'docker-ps',
            label: 'List containers',
            usage: 'docker ps [OPTIONS]',
            nb: '<span class="board__option-title">Options</span> <table><thead><tr><td>Name, shorthand</td><td>Default</td><td>Description</td></tr></thead><tbody><tr><td><code class="highlighter-rouge">--all , -a</code></td><td></td><td>Show all containers (default shows just running)</td></tr><tr><td><code class="highlighter-rouge">--filter , -f</code></td><td></td><td>Filter output based on conditions provided</td></tr><tr><td><code class="highlighter-rouge">--format</code></td><td></td><td>Pretty-print containers using a Go template</td></tr><tr><td><code class="highlighter-rouge">--last , -n</code></td><td><code class="highlighter-rouge">-1</code></td><td>Show n last created containers (includes all states)</td></tr><tr><td><code class="highlighter-rouge">--latest , -l</code></td><td></td><td>Show the latest created container (includes all states)</td></tr><tr><td><code class="highlighter-rouge">--no-trunc</code></td><td></td><td>Don’t truncate output</td></tr><tr><td><code class="highlighter-rouge">--quiet , -q</code></td><td></td><td>Only display numeric IDs</td></tr><tr><td><code class="highlighter-rouge">--size , -s</code></td><td></td><td>Display total file sizes</td></tr></tbody></table>'
        },
        {
            value: 'docker-pull',
            label: 'Pull an image or a repository from a registry',
            usage: 'docker pull [OPTIONS] NAME[:TAG|@DIGEST]',
            nb: 'Most of your images will be created on top of a base image from the Docker Hub registry. Docker Hub contains many pre-built images that you can pull and try without needing to define and configure your own. To download a particular image, or set of images (i.e., a repository), use docker pull.<br><br> <span class="board__option-title">Options</span> <table><thead><tr><td>Name, shorthand</td><td>Default</td><td>Description</td></tr></thead><tbody><tr><td><code class="highlighter-rouge">--all-tags , -a</code></td><td></td><td>Download all tagged images in the repository</td></tr><tr><td><code class="highlighter-rouge">--disable-content-trust</code></td><td><code class="highlighter-rouge">true</code></td><td>Skip image verification</td></tr><tr><td><code class="highlighter-rouge">--platform</code></td><td></td><td><span class="badge badge-info">API 1.32+</span>&nbsp;<span class="badge badge-warning">experimental</span>&nbsp;<br>Set platform if server is multi-platform capable</td></tr></tbody></table>'
        },
        {
            value: 'docker-push',
            label: 'Push an image or a repository to a registry',
            usage: 'docker push [OPTIONS] NAME[:TAG]',
            nb: 'Use docker push to share your images to the Docker Hub registry or to a self-hosted one. Refer to the docker tag reference for more information about valid image and tag names. Killing the docker push process, for example by pressing CTRL-c while it is running in a terminal, terminates the push operation.<br><br> <span class="board__option-title">Options</span> <table><thead><tr><td>Name, shorthand</td><td>Default</td><td>Description</td></tr></thead><tbody><tr><td><code class="highlighter-rouge">--disable-content-trust</code></td><td><code class="highlighter-rouge">true</code></td><td>Skip image signing</td></tr></tbody></table>'
        },

        {
            value: 'docker-registry',
            label: 'Manage Docker registries',
            usage: '',
            nb: '',
        },

        {
            value: 'docker-rename',
            label: 'Rename a container',
            usage: 'docker rename CONTAINER NEW_NAME',
            nb: 'The docker rename command renames a container.'
        },
        {
            value: 'docker-restart',
            label: 'Restart one or more containers',
            usage: 'docker restart [OPTIONS] CONTAINER [CONTAINER...]',
            nb: '<span class="board__option-title">Options</span> <table><thead> <tr> <td>Name, shorthand</td> <td>Default</td> <td>Description</td> </tr></thead><tbody> <tr> <td><code class="highlighter-rouge">--time , -t</code></td> <td><code class="highlighter-rouge">10</code></td> <td>Seconds to wait for stop before killing the container</td> </tr> <!-- end for option --></tbody></table>'
        },
        {
            value: 'docker-rm',
            label: 'Remove one or more containers',
            usage: 'docker rm [OPTIONS] CONTAINER [CONTAINER...]',
            nb: '<span class="board__option-title">Options</span> <table><thead> <tr> <td>Name, shorthand</td> <td>Default</td> <td>Description</td> </tr></thead><tbody> <tr> <td><code class="highlighter-rouge">--force , -f</code></td> <td></td> <td>Force the removal of a running container (uses SIGKILL)</td> </tr> <tr> <td><code class="highlighter-rouge">--link , -l</code></td> <td></td> <td>Remove the specified link</td> </tr> <tr> <td><code class="highlighter-rouge">--volumes , -v</code></td> <td></td> <td>Remove anonymous volumes associated with the container</td> </tr> <!-- end for option --></tbody></table>'
        },
        {
            value: 'docker-rmi',
            label: 'Remove one or more images',
            usage: 'docker rmi [OPTIONS] IMAGE [IMAGE...]',
            nb: 'Removes (and un-tags) one or more images from the host node. If an image has multiple tags, using this command with the tag as a parameter only removes the tag. If the tag is the only one for the image, both the image and the tag are removed.This does not remove images from a registry. You cannot remove an image of a running container unless you use the -f option. To see all images on a host use the docker image ls command. <br><br> <span class="board__option-title">Options</span> <table><thead> <tr> <td>Name, shorthand</td> <td>Default</td> <td>Description</td> </tr></thead><tbody> <tr> <td><code class="highlighter-rouge">--force , -f</code></td> <td></td> <td>Force removal of the image</td> </tr> <tr> <td><code class="highlighter-rouge">--no-prune</code></td> <td></td> <td>Do not delete untagged parents</td> </tr> <!-- end for option --></tbody></table>'
        },
        {
            value: 'docker-run',
            label: 'Run a command in a new container',
            usage: 'docker run [OPTIONS] IMAGE [COMMAND] [ARG...]',
            nb: 'The docker run command first creates a writeable container layer over the specified image, and then starts it using the specified command. That is, docker run is equivalent to the API /containers/create then /containers/(id)/start. A stopped container can be restarted with all its previous changes intact using docker start. See docker ps -a to view a list of all containers. <br><br> <span class="board__option-title">Options</span> <table><thead> <tr> <td>Name, shorthand</td> <td>Default</td> <td>Description</td> </tr></thead><tbody> <tr> <td><code class="highlighter-rouge">--add-host</code></td> <td></td> <td>Add a custom host-to-IP mapping (host:ip)</td> </tr> <tr> <td><code class="highlighter-rouge">--attach , -a</code></td> <td></td> <td>Attach to STDIN, STDOUT or STDERR</td> </tr> <tr> <td><code class="highlighter-rouge">--blkio-weight</code></td> <td></td> <td>Block IO (relative weight), between 10 and 1000, or 0 to disable (default 0)</td> </tr> <tr> <td><code class="highlighter-rouge">--blkio-weight-device</code></td> <td></td> <td>Block IO weight (relative device weight)</td> </tr> <tr> <td><code class="highlighter-rouge">--cap-add</code></td> <td></td> <td>Add Linux capabilities</td> </tr> <tr> <td><code class="highlighter-rouge">--cap-drop</code></td> <td></td> <td>Drop Linux capabilities</td> </tr> <tr> <td><code class="highlighter-rouge">--cgroup-parent</code></td> <td></td> <td>Optional parent cgroup for the container</td> </tr> <tr> <td><code class="highlighter-rouge">--cidfile</code></td> <td></td> <td>Write the container ID to the file</td> </tr> <tr> <td><code class="highlighter-rouge">--cpu-count</code></td> <td></td> <td>CPU count (Windows only)</td> </tr> <tr> <td><code class="highlighter-rouge">--cpu-percent</code></td> <td></td> <td>CPU percent (Windows only)</td> </tr> <tr> <td><code class="highlighter-rouge">--cpu-period</code></td> <td></td> <td>Limit CPU CFS (Completely Fair Scheduler) period</td> </tr> <tr> <td><code class="highlighter-rouge">--cpu-quota</code></td> <td></td> <td>Limit CPU CFS (Completely Fair Scheduler) quota</td> </tr> <tr> <td><code class="highlighter-rouge">--cpu-rt-period</code></td> <td></td> <td><a href="https://docs.docker.com/engine/api/v1.25/" target="_blank" class="_"><span class="badge badge-info" data-toggle="tooltip" ttitle="Open the API reference (in a new window)" data-original-title="" title="">API 1.25+</span></a><br>Limit CPU real-time period in microseconds</td> </tr> <tr> <td><code class="highlighter-rouge">--cpu-rt-runtime</code></td> <td></td> <td><a href="https://docs.docker.com/engine/api/v1.25/" target="_blank" class="_"><span class="badge badge-info" data-toggle="tooltip" ttitle="Open the API reference (in a new window)" data-original-title="" title="">API 1.25+</span></a><br>Limit CPU real-time runtime in microseconds</td> </tr> <tr> <td><code class="highlighter-rouge">--cpu-shares , -c</code></td> <td></td> <td>CPU shares (relative weight)</td> </tr> <tr> <td><code class="highlighter-rouge">--cpus</code></td> <td></td> <td><a href="https://docs.docker.com/engine/api/v1.25/" target="_blank" class="_"><span class="badge badge-info" data-toggle="tooltip" ttitle="Open the API reference (in a new window)" data-original-title="" title="">API 1.25+</span></a><br>Number of CPUs</td> </tr> <tr> <td><code class="highlighter-rouge">--cpuset-cpus</code></td> <td></td> <td>CPUs in which to allow execution (0-3, 0,1)</td> </tr> <tr> <td><code class="highlighter-rouge">--cpuset-mems</code></td> <td></td> <td>MEMs in which to allow execution (0-3, 0,1)</td> </tr> <tr> <td><code class="highlighter-rouge">--detach , -d</code></td> <td></td> <td>Run container in background and print container ID</td> </tr> <tr> <td><code class="highlighter-rouge">--detach-keys</code></td> <td></td> <td>Override the key sequence for detaching a container</td> </tr> <tr> <td><code class="highlighter-rouge">--device</code></td> <td></td> <td>Add a host device to the container</td> </tr> <tr> <td><code class="highlighter-rouge">--device-cgroup-rule</code></td> <td></td> <td>Add a rule to the cgroup allowed devices list</td> </tr> <tr> <td><code class="highlighter-rouge">--device-read-bps</code></td> <td></td> <td>Limit read rate (bytes per second) from a device</td> </tr> <tr> <td><code class="highlighter-rouge">--device-read-iops</code></td> <td></td> <td>Limit read rate (IO per second) from a device</td> </tr> <tr> <td><code class="highlighter-rouge">--device-write-bps</code></td> <td></td> <td>Limit write rate (bytes per second) to a device</td> </tr> <tr> <td><code class="highlighter-rouge">--device-write-iops</code></td> <td></td> <td>Limit write rate (IO per second) to a device</td> </tr> <tr> <td><code class="highlighter-rouge">--disable-content-trust</code></td> <td><code class="highlighter-rouge">true</code></td> <td>Skip image verification</td> </tr> <tr> <td><code class="highlighter-rouge">--dns</code></td> <td></td> <td>Set custom DNS servers</td> </tr> <tr> <td><code class="highlighter-rouge">--dns-opt</code></td> <td></td> <td>Set DNS options</td> </tr> <tr> <td><code class="highlighter-rouge">--dns-option</code></td> <td></td> <td>Set DNS options</td> </tr> <tr> <td><code class="highlighter-rouge">--dns-search</code></td> <td></td> <td>Set custom DNS search domains</td> </tr> <tr> <td><code class="highlighter-rouge">--domainname</code></td> <td></td> <td>Container NIS domain name</td> </tr> <tr> <td><code class="highlighter-rouge">--entrypoint</code></td> <td></td> <td>Overwrite the default ENTRYPOINT of the image</td> </tr> <tr> <td><code class="highlighter-rouge">--env , -e</code></td> <td></td> <td>Set environment variables</td> </tr> <tr> <td><code class="highlighter-rouge">--env-file</code></td> <td></td> <td>Read in a file of environment variables</td> </tr> <tr> <td><code class="highlighter-rouge">--expose</code></td> <td></td> <td>Expose a port or a range of ports</td> </tr> <tr> <td><code class="highlighter-rouge">--gpus</code></td> <td></td> <td><a href="https://docs.docker.com/engine/api/v1.40/" target="_blank" class="_"><span class="badge badge-info" data-toggle="tooltip" ttitle="Open the API reference (in a new window)" data-original-title="" title="">API 1.40+</span></a><br>GPU devices to add to the container (‘all’ to pass all GPUs)</td> </tr> <tr> <td><code class="highlighter-rouge">--group-add</code></td> <td></td> <td>Add additional groups to join</td> </tr> <tr> <td><code class="highlighter-rouge">--health-cmd</code></td> <td></td> <td>Command to run to check health</td> </tr> <tr> <td><code class="highlighter-rouge">--health-interval</code></td> <td></td> <td>Time between running the check (ms|s|m|h) (default 0s)</td> </tr> <tr> <td><code class="highlighter-rouge">--health-retries</code></td> <td></td> <td>Consecutive failures needed to report unhealthy</td> </tr> <tr> <td><code class="highlighter-rouge">--health-start-period</code></td> <td></td> <td><a href="https://docs.docker.com/engine/api/v1.29/" target="_blank" class="_"><span class="badge badge-info" data-toggle="tooltip" ttitle="Open the API reference (in a new window)" data-original-title="" title="">API 1.29+</span></a><br>Start period for the container to initialize before starting health-retries countdown (ms|s|m|h) (default 0s)</td> </tr> <tr> <td><code class="highlighter-rouge">--health-timeout</code></td> <td></td> <td>Maximum time to allow one check to run (ms|s|m|h) (default 0s)</td> </tr> <tr> <td><code class="highlighter-rouge">--help</code></td> <td></td> <td>Print usage</td> </tr> <tr> <td><code class="highlighter-rouge">--hostname , -h</code></td> <td></td> <td>Container host name</td> </tr> <tr> <td><code class="highlighter-rouge">--init</code></td> <td></td> <td><a href="https://docs.docker.com/engine/api/v1.25/" target="_blank" class="_"><span class="badge badge-info" data-toggle="tooltip" ttitle="Open the API reference (in a new window)" data-original-title="" title="">API 1.25+</span></a><br>Run an init inside the container that forwards signals and reaps processes</td> </tr> <tr> <td><code class="highlighter-rouge">--interactive , -i</code></td> <td></td> <td>Keep STDIN open even if not attached</td> </tr> <tr> <td><code class="highlighter-rouge">--io-maxbandwidth</code></td> <td></td> <td>Maximum IO bandwidth limit for the system drive (Windows only)</td> </tr> <tr> <td><code class="highlighter-rouge">--io-maxiops</code></td> <td></td> <td>Maximum IOps limit for the system drive (Windows only)</td> </tr> <tr> <td><code class="highlighter-rouge">--ip</code></td> <td></td> <td>IPv4 address (e.g., 172.30.100.104)</td> </tr> <tr> <td><code class="highlighter-rouge">--ip6</code></td> <td></td> <td>IPv6 address (e.g., 2001:db8::33)</td> </tr> <tr> <td><code class="highlighter-rouge">--ipc</code></td> <td></td> <td>IPC mode to use</td> </tr> <tr> <td><code class="highlighter-rouge">--isolation</code></td> <td></td> <td>Container isolation technology</td> </tr> <tr> <td><code class="highlighter-rouge">--kernel-memory</code></td> <td></td> <td>Kernel memory limit</td> </tr> <tr> <td><code class="highlighter-rouge">--label , -l</code></td> <td></td> <td>Set meta data on a container</td> </tr> <tr> <td><code class="highlighter-rouge">--label-file</code></td> <td></td> <td>Read in a line delimited file of labels</td> </tr> <tr> <td><code class="highlighter-rouge">--link</code></td> <td></td> <td>Add link to another container</td> </tr> <tr> <td><code class="highlighter-rouge">--link-local-ip</code></td> <td></td> <td>Container IPv4/IPv6 link-local addresses</td> </tr> <tr> <td><code class="highlighter-rouge">--log-driver</code></td> <td></td> <td>Logging driver for the container</td> </tr> <tr> <td><code class="highlighter-rouge">--log-opt</code></td> <td></td> <td>Log driver options</td> </tr> <tr> <td><code class="highlighter-rouge">--mac-address</code></td> <td></td> <td>Container MAC address (e.g., 92:d0:c6:0a:29:33)</td> </tr> <tr> <td><code class="highlighter-rouge">--memory , -m</code></td> <td></td> <td>Memory limit</td> </tr> <tr> <td><code class="highlighter-rouge">--memory-reservation</code></td> <td></td> <td>Memory soft limit</td> </tr> <tr> <td><code class="highlighter-rouge">--memory-swap</code></td> <td></td> <td>Swap limit equal to memory plus swap: ‘-1’ to enable unlimited swap</td> </tr> <tr> <td><code class="highlighter-rouge">--memory-swappiness</code></td> <td><code class="highlighter-rouge">-1</code></td> <td>Tune container memory swappiness (0 to 100)</td> </tr> <tr> <td><code class="highlighter-rouge">--mount</code></td> <td></td> <td>Attach a filesystem mount to the container</td> </tr> <tr> <td><code class="highlighter-rouge">--name</code></td> <td></td> <td>Assign a name to the container</td> </tr> <tr> <td><code class="highlighter-rouge">--net</code></td> <td></td> <td>Connect a container to a network</td> </tr> <tr> <td><code class="highlighter-rouge">--net-alias</code></td> <td></td> <td>Add network-scoped alias for the container</td> </tr> <tr> <td><code class="highlighter-rouge">--network</code></td> <td></td> <td>Connect a container to a network</td> </tr> <tr> <td><code class="highlighter-rouge">--network-alias</code></td> <td></td> <td>Add network-scoped alias for the container</td> </tr> <tr> <td><code class="highlighter-rouge">--no-healthcheck</code></td> <td></td> <td>Disable any container-specified HEALTHCHECK</td> </tr> <tr> <td><code class="highlighter-rouge">--oom-kill-disable</code></td> <td></td> <td>Disable OOM Killer</td> </tr> <tr> <td><code class="highlighter-rouge">--oom-score-adj</code></td> <td></td> <td>Tune host’s OOM preferences (-1000 to 1000)</td> </tr> <tr> <td><code class="highlighter-rouge">--pid</code></td> <td></td> <td>PID namespace to use</td> </tr> <tr> <td><code class="highlighter-rouge">--pids-limit</code></td> <td></td> <td>Tune container pids limit (set -1 for unlimited)</td> </tr> <tr> <td><code class="highlighter-rouge">--platform</code></td> <td></td> <td><a href="https://docs.docker.com/engine/reference/commandline/dockerd/#daemon-configuration-file" target="_blank" class="_"><span class="badge badge-warning" data-toggle="tooltip" title="" data-original-title="Read about experimental daemon options (in a new window).">experimental (daemon)</span></a><a href="https://docs.docker.com/engine/api/v1.32/" target="_blank" class="_"><span class="badge badge-info" data-toggle="tooltip" ttitle="Open the API reference (in a new window)" data-original-title="" title="">API 1.32+</span></a><br>Set platform if server is multi-platform capable</td> </tr> <tr> <td><code class="highlighter-rouge">--privileged</code></td> <td></td> <td>Give extended privileges to this container</td> </tr> <tr> <td><code class="highlighter-rouge">--publish , -p</code></td> <td></td> <td>Publish a container’s port(s) to the host</td> </tr> <tr> <td><code class="highlighter-rouge">--publish-all , -P</code></td> <td></td> <td>Publish all exposed ports to random ports</td> </tr> <tr> <td><code class="highlighter-rouge">--read-only</code></td> <td></td> <td>Mount the container’s root filesystem as read only</td> </tr> <tr> <td><code class="highlighter-rouge">--restart</code></td> <td><code class="highlighter-rouge">no</code></td> <td>Restart policy to apply when a container exits</td> </tr> <tr> <td><code class="highlighter-rouge">--rm</code></td> <td></td> <td>Automatically remove the container when it exits</td> </tr> <tr> <td><code class="highlighter-rouge">--runtime</code></td> <td></td> <td>Runtime to use for this container</td> </tr> <tr> <td><code class="highlighter-rouge">--security-opt</code></td> <td></td> <td>Security Options</td> </tr> <tr> <td><code class="highlighter-rouge">--shm-size</code></td> <td></td> <td>Size of /dev/shm</td> </tr> <tr> <td><code class="highlighter-rouge">--sig-proxy</code></td> <td><code class="highlighter-rouge">true</code></td> <td>Proxy received signals to the process</td> </tr> <tr> <td><code class="highlighter-rouge">--stop-signal</code></td> <td><code class="highlighter-rouge">SIGTERM</code></td> <td>Signal to stop a container</td> </tr> <tr> <td><code class="highlighter-rouge">--stop-timeout</code></td> <td></td> <td><a href="https://docs.docker.com/engine/api/v1.25/" target="_blank" class="_"><span class="badge badge-info" data-toggle="tooltip" ttitle="Open the API reference (in a new window)" data-original-title="" title="">API 1.25+</span></a><br>Timeout (in seconds) to stop a container</td> </tr> <tr> <td><code class="highlighter-rouge">--storage-opt</code></td> <td></td> <td>Storage driver options for the container</td> </tr> <tr> <td><code class="highlighter-rouge">--sysctl</code></td> <td></td> <td>Sysctl options</td> </tr> <tr> <td><code class="highlighter-rouge">--tmpfs</code></td> <td></td> <td>Mount a tmpfs directory</td> </tr> <tr> <td><code class="highlighter-rouge">--tty , -t</code></td> <td></td> <td>Allocate a pseudo-TTY</td> </tr> <tr> <td><code class="highlighter-rouge">--ulimit</code></td> <td></td> <td>Ulimit options</td> </tr> <tr> <td><code class="highlighter-rouge">--user , -u</code></td> <td></td> <td>Username or UID (format: &lt;name|uid&gt;[:&lt;group|gid&gt;])</td> </tr> <tr> <td><code class="highlighter-rouge">--userns</code></td> <td></td> <td>User namespace to use</td> </tr> <tr> <td><code class="highlighter-rouge">--uts</code></td> <td></td> <td>UTS namespace to use</td> </tr> <tr> <td><code class="highlighter-rouge">--volume , -v</code></td> <td></td> <td>Bind mount a volume</td> </tr> <tr> <td><code class="highlighter-rouge">--volume-driver</code></td> <td></td> <td>Optional volume driver for the container</td> </tr> <tr> <td><code class="highlighter-rouge">--volumes-from</code></td> <td></td> <td>Mount volumes from the specified container(s)</td> </tr> <tr> <td><code class="highlighter-rouge">--workdir , -w</code></td> <td></td> <td>Working directory inside the container</td> </tr> <!-- end for option --></tbody></table>'
        },
        {
            value: 'docker-save',
            label: 'Save one or more images to a tar archive (streamed to STDOUT by default)',
            usage: 'docker save [OPTIONS] IMAGE [IMAGE...]',
            nb: 'Produces a tarred repository to the standard output stream. Contains all parent layers, and all tags + versions, or specified repo:tag, for each argument provided. <br><br> <span class="board__option-title">Options</span> <table><thead><tr><td>Name, shorthand</td><td>Default</td><td>Description</td></tr></thead><tbody><tr><td><code class="highlighter-rouge">--output , -o</code></td><td></td><td>Write to a file, instead of STDOUT</td></tr></tbody></table>'
        },
        {
            value: 'docker-search',
            label: 'Search the Docker Hub for images',
            usage: 'docker search [OPTIONS] TERM',
            nb: 'Search Docker Hub for images. See Find Public Images on Docker Hub for more details on finding shared images from the command line.<br><br> <span class="board__option-title">Options</span> <table><thead><tr><td>Name, shorthand</td><td>Default</td><td>Description</td></tr></thead><tbody><tr><td><code class="highlighter-rouge">--automated</code></td><td></td><td><span class="badge badge-danger">deprecated</span>&nbsp;<br>Only show automated builds</td></tr><tr><td><code class="highlighter-rouge">--filter , -f</code></td><td></td><td>Filter output based on conditions provided</td></tr><tr><td><code class="highlighter-rouge">--format</code></td><td></td><td>Pretty-print search using a Go template</td></tr><tr><td><code class="highlighter-rouge">--limit</code></td><td><code class="highlighter-rouge">25</code></td><td>Max number of search results</td></tr><tr><td><code class="highlighter-rouge">--no-trunc</code></td><td></td><td>Don’t truncate output</td></tr><tr><td><code class="highlighter-rouge">--stars , -s</code></td><td></td><td><span class="badge badge-danger">deprecated</span>&nbsp;<br>Only displays with at least x stars</td></tr></tbody></table>'
        },

        {
            value: 'docker-secret',
            label: 'Manage Docker secrets',
            usage: '',
            nb: '',
        },
        {
            value: 'docker-service',
            label: 'Manage services',
            usage: '',
            nb: '',
        },
        {
            value: 'docker-stacks',
            label: 'Manage Docker stacks',
            usage: '',
            nb: '',
        },

        {
            value: 'docker-start',
            label: 'Start one or more stopped containers',
            usage: 'docker start [OPTIONS] CONTAINER [CONTAINER...]',
            nb: '<span class="board__option-title">Options</span> <table><thead><tr><td>Name, shorthand</td><td>Default</td><td>Description</td></tr></thead><tbody><tr><td><code class="highlighter-rouge">--attach , -a</code></td><td></td><td>Attach STDOUT/STDERR and forward signals</td></tr><tr><td><code class="highlighter-rouge">--checkpoint</code></td><td></td><td><span class="badge badge-warning">experimental</span>&nbsp;<br>Restore from this checkpoint</td></tr><tr><td><code class="highlighter-rouge">--checkpoint-dir</code></td><td></td><td><span class="badge badge-warning">experimental</span>&nbsp;<br>Use a custom checkpoint storage directory</td></tr><tr><td><code class="highlighter-rouge">--detach-keys</code></td><td></td><td>Override the key sequence for detaching a container</td></tr><tr><td><code class="highlighter-rouge">--interactive , -i</code></td><td></td><td>Attach container’s STDIN</td></tr></tbody></table>'
        },
        {
            value: 'docker-stats',
            label: 'Display a live stream of container(s) resource usage statistics',
            usage: 'docker stats [OPTIONS] [CONTAINER...]',
            nb: 'The docker stats command returns a live data stream for running containers. To limit data to one or more specific containers, specify a list of container names or ids separated by a space. You can specify a stopped container but stopped containers do not return any data.If you want more detailed information about a container’s resource usage, use the /containers/(id)/stats API endpoint. <br><br> <span class="board__option-title">Options</span> <table><thead><tr><td>Name, shorthand</td><td>Default</td><td>Description</td></tr></thead><tbody><tr><td><code class="highlighter-rouge">--all , -a</code></td><td></td><td>Show all containers (default shows just running)</td></tr><tr><td><code class="highlighter-rouge">--format</code></td><td></td><td>Pretty-print images using a Go template</td></tr><tr><td><code class="highlighter-rouge">--no-stream</code></td><td></td><td>Disable streaming stats and only pull the first result</td></tr><tr><td><code class="highlighter-rouge">--no-trunc</code></td><td></td><td>Do not truncate output</td></tr></tbody></table>'
        },
        {
            value: 'docker-stop',
            label: 'Stop one or more running containers',
            usage: 'docker stop [OPTIONS] CONTAINER [CONTAINER...]',
            nb: 'The main process inside the container will receive SIGTERM, and after a grace period, SIGKILL. <br><br> <span class="board__option-title">Options</span> <table><thead><tr><td>Name, shorthand</td><td>Default</td><td>Description</td></tr></thead><tbody><tr><td><code class="highlighter-rouge">--time , -t</code></td><td><code class="highlighter-rouge">10</code></td><td>Seconds to wait for stop before killing it</td></tr></tbody></table>'
        },

        {
            value: 'docker-swarm',
            label: 'Manage Swarm',
            usage: '',
            nb: '',
        },
        {
            value: 'docker-system',
            label: 'Manage Docker',
            usage: '',
            nb: '',
        },
        {
            value: 'docker-template',
            label: 'Use templates to quickly create new services',
            usage: '',
            nb: '',
        },

        {
            value: 'docker-tag',
            label: 'Create a tag TARGET_IMAGE that refers to SOURCE_IMAGE',
            usage: 'docker tag SOURCE_IMAGE[:TAG] TARGET_IMAGE[:TAG]',
            nb: 'An image name is made up of slash-separated name components, optionally prefixed by a registry hostname. The hostname must comply with standard DNS rules, but may not contain underscores. If a hostname is present, it may optionally be followed by a port number in the format :8080. If not present, the command uses Docker’s public registry located at registry-1.docker.io by default. Name components may contain lowercase letters, digits and separators. A separator is defined as a period, one or two underscores, or one or more dashes. A name component may not start or end with a separator.'
        },
        {
            value: 'docker-top',
            label: 'Display the running processes of a container',
            usage: 'docker top CONTAINER [ps OPTIONS]',
            nb: ''
        },

        {
            value: 'docker-trust',
            label: 'Manage trust on Docker images',
            usage: '',
            nb: '',
        },

        {
            value: 'docker-unpouse',
            label: 'Unpause all processes within one or more containers',
            usage: 'docker unpause CONTAINER [CONTAINER...]',
            nb: 'The docker unpause command un-suspends all processes in the specified containers. On Linux, it does this using the freezer cgroup.'
        },
        {
            value: 'docker-update',
            label: 'Update configuration of one or more containers',
            usage: 'docker update [OPTIONS] CONTAINER [CONTAINER...]',
            nb: 'The docker update command dynamically updates container configuration. You can use this command to prevent containers from consuming too many resources from their Docker host. With a single command, you can place limits on a single container or on many. To specify more than one container, provide space-separated list of container names or IDs. <br><br> <span class="board__option-title">Options</span> <table><thead> <tr> <td>Name, shorthand</td> <td>Default</td> <td>Description</td> </tr></thead><tbody> <tr> <td><code class="highlighter-rouge">--blkio-weight</code></td> <td></td> <td>Block IO (relative weight), between 10 and 1000, or 0 to disable (default 0)</td> </tr> <tr> <td><code class="highlighter-rouge">--cpu-period</code></td> <td></td> <td>Limit CPU CFS (Completely Fair Scheduler) period</td> </tr> <tr> <td><code class="highlighter-rouge">--cpu-quota</code></td> <td></td> <td>Limit CPU CFS (Completely Fair Scheduler) quota</td> </tr> <tr> <td><code class="highlighter-rouge">--cpu-rt-period</code></td> <td></td> <td><a href="https://docs.docker.com/engine/api/v1.25/" target="_blank" class="_"><span class="badge badge-info" data-toggle="tooltip" ttitle="Open the API reference (in a new window)" data-original-title="" title="">API 1.25+</span></a><br>Limit the CPU real-time period in microseconds</td> </tr> <tr> <td><code class="highlighter-rouge">--cpu-rt-runtime</code></td> <td></td> <td><a href="https://docs.docker.com/engine/api/v1.25/" target="_blank" class="_"><span class="badge badge-info" data-toggle="tooltip" ttitle="Open the API reference (in a new window)" data-original-title="" title="">API 1.25+</span></a><br>Limit the CPU real-time runtime in microseconds</td> </tr> <tr> <td><code class="highlighter-rouge">--cpu-shares , -c</code></td> <td></td> <td>CPU shares (relative weight)</td> </tr> <tr> <td><code class="highlighter-rouge">--cpus</code></td> <td></td> <td><a href="https://docs.docker.com/engine/api/v1.29/" target="_blank" class="_"><span class="badge badge-info" data-toggle="tooltip" ttitle="Open the API reference (in a new window)" data-original-title="" title="">API 1.29+</span></a><br>Number of CPUs</td> </tr> <tr> <td><code class="highlighter-rouge">--cpuset-cpus</code></td> <td></td> <td>CPUs in which to allow execution (0-3, 0,1)</td> </tr> <tr> <td><code class="highlighter-rouge">--cpuset-mems</code></td> <td></td> <td>MEMs in which to allow execution (0-3, 0,1)</td> </tr> <tr> <td><code class="highlighter-rouge">--kernel-memory</code></td> <td></td> <td>Kernel memory limit</td> </tr> <tr> <td><code class="highlighter-rouge">--memory , -m</code></td> <td></td> <td>Memory limit</td> </tr> <tr> <td><code class="highlighter-rouge">--memory-reservation</code></td> <td></td> <td>Memory soft limit</td> </tr> <tr> <td><code class="highlighter-rouge">--memory-swap</code></td> <td></td> <td>Swap limit equal to memory plus swap: ‘-1’ to enable unlimited swap</td> </tr> <tr> <td><code class="highlighter-rouge">--pids-limit</code></td> <td></td> <td><a href="https://docs.docker.com/engine/api/v1.40/" target="_blank" class="_"><span class="badge badge-info" data-toggle="tooltip" ttitle="Open the API reference (in a new window)" data-original-title="" title="">API 1.40+</span></a><br>Tune container pids limit (set -1 for unlimited)</td> </tr> <tr> <td><code class="highlighter-rouge">--restart</code></td> <td></td> <td>Restart policy to apply when a container exits</td> </tr> <!-- end for option --></tbody></table>'
        },
        {
            value: 'docker-version',
            label: 'Show the Docker version information',
            usage: 'docker version [OPTIONS]',
            nb: 'By default, this will render all version information in an easy to read layout. If a format is specified, the given template will be executed instead. <br><br> <span class="board__option-title">Options</span> <table><thead> <tr> <td>Name, shorthand</td> <td>Default</td> <td>Description</td> </tr></thead><tbody> <tr> <td><code class="highlighter-rouge">--format , -f</code></td> <td></td> <td>Format the output using the given Go template</td> </tr> <tr> <td><code class="highlighter-rouge">--kubeconfig</code></td> <td></td> <td><span class="badge badge-info" data-toggle="tooltip" title="" data-original-title="This option works for the Kubernetes orchestrator.">Kubernetes</span><br>Kubernetes config file</td> </tr> <!-- end for option --></tbody></table>'
        },

        {
            value: 'docker-volume',
            label: 'Manage volumes',
            usage: '',
            nb: ''
        },

        {
            value: 'docker-wait',
            label: 'Block until one or more containers stop, then print their exit codes',
            usage: 'docker wait CONTAINER [CONTAINER...]',
            nb: ''
        }
    ],
    "dokcer-compose-cli": [
        {
            value: 'coming-soon',
            label: 'Coming Soon',
            usage: '',
            nb: ''
        }
    ]
};
